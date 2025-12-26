import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '6px solid #a78bfa',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '48px',
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              color: '#a78bfa',
              letterSpacing: '2px',
            }}
          >
            ESD
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
