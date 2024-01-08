import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Layout from "../components/Layout/Layout";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import SeoHead from "../components/SeoHead";
import getScrollAnimation from "../utils/getScrollAnimation";

export default function GetInvolved() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [data, setData] = useState({})

    return (
        <React.Fragment>
            <SeoHead title='AI-filliate Landing Page' />
            <Layout>
                <div className="text-lg max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="grid grid-flow-row sm:grid-flow-col md:grid-rows-1 gap-2 pt-6 sm:pt-16"
                            variants={scrollAnimation}>

                            <div className="bg-[#ffffff] rounded-[2rem] p-5 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                                <p className="flex items-center p-3">
                                    <Image
                                        width="300"
                                        height="300"
                                        src="/assets/author4.png" />
                                </p>
                                <p>Hey there!</p><br />
                                <p>My name is Johannes and im the founder of <strong>AI-filliate!</strong></p>
                                <p>AI-filliate is <strong>still in development.</strong></p>
                                <p>However, we go live soon with a public beta!</p>
                                <p>Once we go live, <strong>the first 100 customers</strong> will get access for the early beta phase.</p>
                                <p>You can save your spot on the waiting list here.</p>
                                <p>If you have any questions, you can write me an email, anytime!</p>
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
                <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="grid grid-flow-row sm:grid-flow-col md:grid-rows-1 gap-2 pt-2"
                            variants={scrollAnimation}>
                            <div className="w-full bg-[#ffffff] rounded-[2rem] p-5 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                                <input placeholder="Enter your Name" className="w-full outline-none" onChange={(name) => {
                                    setData({
                                        ...data,
                                        name
                                    })
                                }} />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
                <div className="max-w-screen-xl mb-24 px-8 xl:px-16 mx-auto">
                    <ScrollAnimationWrapper>
                        <motion.div
                            className="grid grid-flow-row sm:grid-flow-col md:grid-rows-1 gap-2 pt-2"
                            variants={scrollAnimation}>
                            <div className="w-full bg-[#ffffff] rounded-[2rem] p-5 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                                <input placeholder="Enter your Email" className="w-full outline-none" onChange={(email) => {
                                    setData({
                                        ...data,
                                        email
                                    })
                                }} />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
                <div>
                    <button>Save your spot</button>
                </div>
            </Layout>
        </React.Fragment>
    )
}