import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="overflow-x-hidden dark">
            <body className="bg-bg antialiased font-body bg-bg leading-7 text-body">
                <Header />
                <main id="content">
                    <div className="container mx-auto px-4">
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    )
}
