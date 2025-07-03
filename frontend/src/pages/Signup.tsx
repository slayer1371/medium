import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="invisible lg:visible">
                <Quote /> 
                {/* after lg breakpoint, Quote section will disappear from the screen.only the create account section remains */}

            </div>
        </div>
    </div>
}