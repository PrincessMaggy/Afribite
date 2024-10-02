import Banner from "../components/Banner"
import Button from "../components/button"
import { FiImage } from "react-icons/fi";

import { useState } from "react";
import Category from "../components/ui/Category";
import { ChoiceDate } from "../components/ui/DatePicker";


const Promotions = () => {

    const [termsAccepted, setTermsAccepted] = useState(false);

    return (
        <div className="w-full p-4 bg-white/70 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
                <Banner text={"12% per annum"} />

                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-2 font-semibold text-[#E2725B]">Title field</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-2 font-semibold text-[#E2725B]">Description</label>
                        <textarea
                            id="description"
                            rows={3}
                            className="w-full p-2 border-2 bg-inherit border-[#E2725B]/20 rounded-lg focus:outline-none focus:border-[#E2725B]"
                        ></textarea>
                    </div>

                    <div className="flex justify-between text-sm md:text-base ">
                        <span>
                        <h3 className="text-[#E2725B]">Choose a Start date</h3>
                        <ChoiceDate />
                        </span>

                        <span className="md:inline-block hidden">
                        <h3 className="text-[#E2725B] ">Calculated end date</h3>
                        <ChoiceDate />
                        </span>
                    </div>
                  


                    <div>
                        <p className="mb-2 font-semibold text-[#E2725B]">Upload image</p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border-2 border-dashed">
                            <FiImage className="text-5xl text-n-n3" />
                            <p className="text-center sm:text-left">Upload an image for your restaurant banner (GIF, JPG or PNG)</p>
                            <label
                                htmlFor="file"
                                className="inline-block box-border border-2 cursor-pointer bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop hover:text-p-button hover:bg-n-n7"
                            >
                                Browse
                            </label>
                            <input id='file' type="file" accept="image/png, image/gif, image/jpeg" className="hidden" />
                        </div>
                    </div>

                    <Category />


                    <div className="flex items-center md:space-x-4  justify-between">
                        <Button text='Save and Exit' className='w-auto' />

                        <span className="flex w-24 md:w-auto text-sm md:text-base">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mr-2"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <label htmlFor="terms" className=" text-white">
                                Read <span className="text-[#E2725B] font-semibold">Terms and Conditions</span>
                            </label>
                        </span>

                    </div>


                </form>
                <div className=" pt-4 mt-2  flex justify-between">

                    <button type="button" className="px-4 py-2 border border-[#E2725B] text-[#E2725B] rounded-md hover:bg-[#E2725B] hover:text-white transition-colors">
                        Cancel
                    </button>

                    <button type="button" className="px-4 py-2 bg-[#E2725B] text-white rounded-md hover:bg-[#D1614A] transition-colors">
                        Upload
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Promotions;