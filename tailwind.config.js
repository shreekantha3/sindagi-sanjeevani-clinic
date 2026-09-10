/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#EEFAF9',100:'#D7F1F0',200:'#AEE3E2',300:'#7DD1D0',400:'#3AAFAE',500:'#0E7C7B',600:'#0B6565',700:'#084F4F',800:'#063D3D',900:'#042E2E' },
        leaf: '#0E7C7B',
        cream: '#F8FAFC',
        ink: '#0F172A'
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
