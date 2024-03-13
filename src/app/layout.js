import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import localFont from 'next/font/local'
 
const myFont = localFont({ src: './Yekan.woff2' })


export const metadata = {
  title: "حسام نیکخواه طراح و برنامه نویس",
  description: "وبسایت شخصی حسام نیکخواه طراح و برنامه نویس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
