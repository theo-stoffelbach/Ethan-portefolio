import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '2px solid #a78bfa',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '9px',
              fontWeight: 'bold',
              fontFamily: 'Georgia, serif',
              color: '#a78bfa',
              letterSpacing: '0.5px',
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
