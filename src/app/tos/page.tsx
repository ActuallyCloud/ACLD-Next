import dotenv from 'dotenv';
dotenv.config();

export default function TermsOfService() {
    return (
        <div className="animate-fadein">
            <div className="cursor-default flex p-4 text-center min-h-96 items-center mx-auto justify-center bg-gradient-to-tr from-red-800 to-yellow-800">
                <div className="max-w-7xl pt-12 lg:pt-8 p-4 md:p-8">
                    <h1 className="text-2xl md:text-4xl p-4">Terms of Service & Privacy Policy</h1>
                    <h3 className="text-lg md:text-xl p-4">These terms of service and this privacy policy govern if and how your data is treated and your rights with regard to use of the services. By using any of the services and/or this website you are agreeing to the most up-to-date version of these policies. Please read them carefully.</h3>
                    <p className="md:text-lg">Last updated: September 16th, 2024</p>
                </div>
            </div>
            <div className="max-w-7xl p-2 md:p-6 mx-auto md:text-lg">
                <h3 className="p-4 text-xl md:text-2xl">Terms of Service</h3>
                <p className="p-4">For the purposes of the following documents, &quot;service&quot; or &quot;services&quot; is defined as any program or website that I create and/or operate that is available for public use, including but not limited to this website and the discord bots. I do not claim ownership of any tools that I use to create the services, except when explicitly defined. Some of the services operate through Discord, which I do not own. Discord&apos;s TOS is available on their website.</p>
                <p className="p-4">None of the services are guaranteed uptime. I (and the server&apos;s provider) reserve the ability to take my servers and/or services offline without notice and without any expectation of return time. There is no compensation available, and I provide no warranty or guarantee of service.</p>
                <p className="p-4">You cannot use the services to cause harm in any way, nor can you attempt to cause harm to the services themselves. You also cannot use the services to perform illegal activites. I am not responsible for any harm, damage or illegal activities done while using the services.</p>
                <p className="p-4">From time to time I may gather any user feedback or implement any changes to any service as a result of bug reports or user feedback. Unless I state otherwise, there is no compensation or credit available for users who bring bugs to my attention, submit feedback, or otherwise contribute to development of the services in any way.</p>
                <p className="p-4">Code for some of the services may be made available online by me for any reason. This does NOT allow you to distribute this code for yourself, claim credit for it in any way, or run it privately on your own machine, unless I explicitly state so. I may also update the code, or these terms, at any time without prior notice.</p>
                <p className="p-4">I reserve the right to remove your access to the services at any time for any reason, including breach of any of the terms. Usage of your data on any of the services is governed by the privacy policy, located below the terms of service on this page.</p>
            </div>
            <div className="max-w-7xl p-2 md:p-6 mx-auto md:text-lg">
                <h3 className="p-4 text-xl md:text-2xl">Privacy Policy</h3>
                <p className="p-4">For the purposes of the following document, &quot;data&quot; is defined as any data submitted to the services by users, or data collected about use of the services during normal operations. For the purposes of the following document, &quot;operation&quot; is defined as any interaction or command you run with any of the services. An operation starts when you first run the interaction or command and ends after the services have sent the final message of the operation&apos;s response and closed the request.</p>
                <p className="p-4">During normal operations, some data is required for user interactions with the services. This may include (but is not limited to): your Discord username, your Discord tag, your Discord ID, or messages you send to the services. Unless otherwise stated, this data is never written to permanent storage, and is immediately deleted or marked for overwriting after it is no longer used by the operation.</p>
                <p className="p-4">During normal operation, some data is collected for diagnostics when the services are used. This may include (but is not limited to): time of request, type of request, or response given. This data is anonymously recorded, stored and is used for improvement of the services. The services do not store any kind of identifying information and cannot trace operations back to the user who ran them once the operation completes. This anonymous data is stored in logs that are periodically reviewed and cleared by the developer of this application. No other person has access to the data.</p>
            </div>
        </div>
    )
}