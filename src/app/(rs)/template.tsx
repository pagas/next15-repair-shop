export default async function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-apear">
            {children}
        </div>
    );
}