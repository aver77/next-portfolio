import type { Metadata } from "next";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import useRootLocalization from "@/shared/lib/hooks/useRootLocalization";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopScroller from "@/components/topScroller";

import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal"],
    subsets: ["latin", "cyrillic"]
});

import "./globalStyles.scss";

export const metadata: Metadata = {
    title: "NA CV",
    description: "Principle Frontend engineer CV"
};
async function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
    const { locale, messages } = await useRootLocalization(params);

    return (
        <html lang={locale}>
            <link rel="shortcut icon" href="/favicon.svg" />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
            </Head>
            <body className={roboto.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header />
                    {children}
                    <TopScroller />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;
