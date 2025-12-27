import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (reset on server restart)
// For production, use Redis or a dedicated rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count };
}

// Validation functions
function isValidEmail(email: string): boolean {
  // Stricter email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Check for injection attempts (newlines, etc.)
  if (/[\r\n%0a%0d]/.test(email)) {
    return false;
  }
  return emailRegex.test(email) && email.length <= 254;
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, 5000); // Max length
}

function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 100;
}

function isValidSubject(subject: string): boolean {
  return subject.length >= 3 && subject.length <= 200;
}

function isValidMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 5000;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // Check rate limit
    const { allowed, remaining } = getRateLimitInfo(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Trop de requetes. Reessayez plus tard." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(RATE_LIMIT),
            "X-RateLimit-Remaining": "0",
            "Retry-After": "3600",
          },
        }
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Format de requete invalide" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Check required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = sanitizeInput(String(name));
    const safeEmail = String(email).toLowerCase().trim();
    const safeSubject = sanitizeInput(String(subject));
    const safeMessage = sanitizeInput(String(message));

    // Validate each field
    if (!isValidName(safeName)) {
      return NextResponse.json(
        { error: "Le nom doit contenir entre 2 et 100 caracteres" },
        { status: 400 }
      );
    }

    if (!isValidEmail(safeEmail)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!isValidSubject(safeSubject)) {
      return NextResponse.json(
        { error: "Le sujet doit contenir entre 3 et 200 caracteres" },
        { status: 400 }
      );
    }

    if (!isValidMessage(safeMessage)) {
      return NextResponse.json(
        { error: "Le message doit contenir entre 10 et 5000 caracteres" },
        { status: 400 }
      );
    }

    // Log the message (in production, send email via SendGrid/Resend/etc.)
    console.log("=== NOUVEAU MESSAGE DE CONTACT ===");
    console.log(`IP: ${ip}`);
    console.log(`Nom: ${safeName}`);
    console.log(`Email: ${safeEmail}`);
    console.log(`Sujet: ${safeSubject}`);
    console.log(`Message: ${safeMessage}`);
    console.log(`Date/Heure: ${new Date().toLocaleString("fr-FR")}`);
    console.log("==================================");

    // Return success without echoing sensitive data
    return NextResponse.json(
      {
        message: "Message recu avec succes",
        success: true,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT),
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la demande:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
