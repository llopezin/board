export default function BoulderListLayout({ children }: { children: React.ReactNode }) {

    return <div className="bg-stone-800 w-screen h-screen">
        <div className="flex gap-4 p-4">
            <h2 className="text-white text-2xl">Boulder List</h2>
        </div>

        {children}
    </div>
}