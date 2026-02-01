export default function BoulderListLayout({ children }: { children: React.ReactNode }) {

    return <div className="bg-stone-800 h-screen w-screen overflow-hidden flex flex-col">
        <div className="flex gap-4 p-4">
            <h2 className="text-white text-2xl">Boulder List</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
            {children}
        </div>
    </div>
}