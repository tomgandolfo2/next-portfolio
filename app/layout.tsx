import "../styles/globals.css"
import Header from "./Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <div className="bg-neutral-100">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
