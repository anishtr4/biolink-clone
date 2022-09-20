import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Vlad Mykol</title>
                <meta name="description" content="personal website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="main">
                <div className="App">
                    <div className="mt-48 page-full-wrap relative ">
                        <picture className="display-image m-auto">
                            <img className="display-image m-auto"
                                 src="/img/avatar.png"
                                 alt="Vlad Mykol"/>
                        </picture>
                        <h2 className="page-title page-text-color page-text-font mt-16 text-center">
                            Vlad Mykol
                        </h2>
                        <div
                            className="page-bioline text-fs-16 page-text-color page-text-font mt-12 ln-h-22 text-center">
                            Experienced Software Engineer
                        </div>


                        <div className="mt-48">
                            <div className="page-item-wrap relative">
                                <div className="page-item flex-both-center absolute"/>
                                <a target="_blank" rel="noreferrer noopener nofollow"
                                   className="page-item-each py-10 flex-both-center"
                                   href="https://www.linkedin.com/in/vladmykol/" data-id="625752" datatype="page_item">
                                    <picture className="link-each-image left-9">
                                        <img className="link-each-image"
                                             src="/img/linkedin.png"
                                             alt="Connect with me"/>
                                    </picture>
                                    <span className=" item-title text-center">Connect with me</span>
                                </a>
                            </div>
                            <div className="page-item-wrap relative">
                                <div className="page-item flex-both-center absolute"/>
                                <a target="_blank" rel="noreferrer noopener nofollow"
                                   className="page-item-each py-10 flex-both-center"
                                   href="https://medium.com/@vladmykol" data-id="625754" datatype="page_item">
                                    <picture className="link-each-image left-9">
                                        <img className="link-each-image"
                                             src="/img/medium.png"
                                             alt="Read my articles"/>
                                    </picture>
                                    <span className=" item-title text-center">Read my articles</span>
                                </a>
                            </div>
                            <div className="page-item-wrap relative">
                                <div className="page-item flex-both-center absolute"/>
                                <a target="_blank" rel="noreferrer noopener nofollow"
                                   className="page-item-each py-10 flex-both-center"
                                   href="https://github.com/vladmykol/mando-chatbot" data-id="625770"
                                   datatype="page_item">
                                    <picture className="link-each-image left-9">
                                        <img className="link-each-image"
                                             src="/img/github.png"
                                             alt="Meet my pet project"/>
                                    </picture>
                                    <span className=" item-title text-center">Meet my pet project</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Home
