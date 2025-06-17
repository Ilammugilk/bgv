export default function DashboardLayout({ children, Sidebar }) {
    return (
        <>
            <div>{Sidebar}</div>
            <div>
                {children}
            </div>
        </>
    );
}
