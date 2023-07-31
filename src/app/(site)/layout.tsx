import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";

export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="h-full">
      <ToasterProvider />
      <Sidebar>{children}</Sidebar>
    </main>
  );
}
