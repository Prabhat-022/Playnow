
const Footer = () => {
    return (
        <div className="mx-10 flex flex-col  justify-center">
            <p>Questions? Calll <a >000-800-919-1694</a ></p>

            <div className=" flex items-center justify-between mx-10">
                <div className="flex flex-col ">
                    <a href="#" >FAQ</a >
                    <a href="#" >Jobs</a >
                    <a href="#" >Account</a >
                    <a href="#" >Privacy</a >
                    <a href="#" >Help Centre</a >
                    <a href="#" >Media Centre</a >
                    <a href="#" >Investor Relation</a >
                </div>
                <div className="flex flex-col">
                    <a href="#" >Ways to Watch</a >
                    <a href="#" >Terms of Use</a >
                    <a href="#" >Contact Us</a >
                    <a href="#" >Speed Test</a >
                    <a href="#" >Legal Notices</a >
                    <a href="#" >Only on Netflix</a >
                    <a href="#" >Cookie Preferences</a >
                    <a href="#" >Corporete Information</a >
                </div>
            </div>
            <div className="border w-20">
                <select className="rounded-none">
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="Korean">Korean</option>
                </select>
            </div>
            <p>This is Education Purpose only</p>
        </div>
    )
}

export default Footer;
