const Contact = () => {
    return(
        <div className="p-10 min-h-[55vh] flex items-center flex-col bg-pink-50">
            <h1 className="contact-heading font-bold text-3xl mb-4 text-gray-800">Contact</h1>
            <form action="" className="flex flex-col border border-black p-4 rounded-lg w-80 m-4 bg-slate-50">
                <label htmlFor="name">Name :</label><input type="text" required name="name" placeholder="Enter your name" className="border border-black m-2 p-2"/>
                <label htmlFor="phoneNo">Phone :</label><input type="tel" pattern="[0-9]{10}" required name="phoneNo" placeholder="Enter 10 digit phone number" className="border border-black m-2 p-2"/>
                <label htmlFor="email">Email :</label><input type="email" name="email" placeholder="Enter your email id" className="border border-black m-2 p-2"/>
                <label htmlFor="message">Feedback :</label><input type="text" required name="message" placeholder="Enter your valuable feedback" className="border border-black m-2 p-2"/>
                <div className="flex justify-center">
                <button type="submit" className="bg-green-600 text-white font-semibold rounded-lg m-2 p-2 w-20">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;