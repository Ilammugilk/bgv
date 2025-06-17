import Navbar from "@/components/navbar/page";

export default function Verification() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-content px-16 py-16 text-center bg-slate-50">
                <h1 className="text-black font-bold text-3xl">Background Verification Request</h1>
                <p className="text-2xl md:text-xl mt-5">Submit your verification request through our secure platform</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5">
                    <button className="bg-black text-white px-6 py-3 rounded">
                        Individual Client
                    </button>
                    <button className="border bg-white border-gray-500 px-6 py-3 rounded hover:bg-gray-100 transition">
                        Organization
                    </button>
                </div>
            </div>
        </>
    )
}
