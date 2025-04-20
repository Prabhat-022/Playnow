import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className=" flex flex-col items-center justify-center gap-4 text-gray-500 w-[100%] bg-black p-5">
                <div className="flex-none text-start">
                    <p className="text-start ">Questions? Calll <Link >000-800-919-1694</Link ></p>

                </div>
                <div className=" flex items-center justify-between gap-4 w-[100%] mx-10 px-10">
                    <div className="flex flex-col text-start px-10 ">
                        <Link href="#" >FAQ</Link >
                        <Link href="#" >Jobs</Link >
                        <Link href="#" >Account</Link >
                        <Link href="#" >Privacy</Link >

                    </div>
                    <div className="flex flex-col text-start px-10">
                        <Link href="#" >Help Centre</Link >
                        <Link href="#" >Media Centre</Link >
                        <Link href="#" >Investor Relation</Link >
                        <Link href="#" >Ways to Watch</Link >
                    </div>
                    <div className="flex flex-col text-start px-10">
                        <Link href="#" >Terms of Use</Link >
                        <Link href="#" >Contact Us</Link >
                        <Link href="#" >Speed Test</Link >
                        <Link href="#" >Legal Notices</Link >

                    </div>
                    <div className="flex flex-col text-start px-10">
                        <Link href="#" >Only on Netflix</Link >
                        <Link href="#" >Cookie Preferences</Link >
                        <Link href="#" >Corporete Information</Link >
                    </div>
                </div>
                <div className="border w-20 text-black my-5">
                    <select className="rounded-none">
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="Korean">Korean</option>
                    </select>
                </div>
                <p>This is Education Purpose only</p>
            </div>
        </>
    )
}

export default Footer;