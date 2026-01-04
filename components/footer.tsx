export default function Footer() {
    return (
        <footer className="w-full border-t border-[#D9D9D9] bg-white">
            <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-[#4B4B4B]">
                © {new Date().getFullYear()} BluLab. All rights reserved.
            </div>
        </footer>
    );
}