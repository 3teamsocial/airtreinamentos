'use client'

export default function FloatingRegisterButton() {
  return (
    <a
      href="https://www.e-inscricao.com/air-treinamentos/imersaoestrategica#payment-information-section"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-orange-500 hover:bg-orange-600
        text-white font-semibold
        px-6 py-4 rounded-full
        shadow-xl
        transition-all duration-300
        animate-pulse
      "
    >
      Inscreva-se aqui
    </a>
  )
}
