import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Dra. Lauren Mitchell | Ortodontia Especializada em Sorrisos Saudáveis",
  description:
    "Dra. Lauren Mitchell é uma experiente dentista especializada em ortodontia dedicada a criar sorrisos saudáveis e confiantes. Oferecemos tratamentos ortodônticos personalizados para pacientes de todas as idades. Agende uma consulta para obter o sorriso dos seus sonhos!",
  keywords:
    "ortodontia, dentista, tratamento ortodôntico, sorrisos saudáveis, ortodontista, consultório odontológico, aparelho dentário, correção de dentes, especialista em ortodontia, Lauren Mitchell, saúde bucal, alinhamento dentário, aparelho invisível, odontologia estética, cuidados dentários, ortodontia infantil, prevenção odontológica, higiene bucal, alinhadores transparentes, saúde dos dentes, estética do sorriso, ortodontia para adultos, alinhamento dos dentes, dentes retos, ortodontia avançada, ortodontia moderna, tecnologia odontológica, clínica dentária, exames ortodônticos, correção dental, harmonia facial, ortodontia preventiva, aparelho fixo, tratamento odontológico, saúde oral, alívio da dor dentária, consultas regulares, estética facial, radiografias dentárias, cuidados com os dentes, ortodontia interceptiva, sorriso perfeito, plano de tratamento, conforto odontológico, aparelho removível, exames bucais, check-ups dentários, endodontia",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
