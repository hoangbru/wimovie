export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#">hehe</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
          {children}
      </div>
    </main>
  );
}
