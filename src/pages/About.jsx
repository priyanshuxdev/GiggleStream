import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer";

function About() {
  return (
    <div className="min-h-screen bg-[#DFCCAA] py-16 px-4">
      <div className="max-w-3xl mx-auto mt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#4A2C2A] mb-6">
            About{" "}
            <span className="bg-[#B85C38] text-white px-4 py-2 rounded-lg drop-shadow-[0_3px_3px_rgba(0,0,0,0.7)]">
              GiggleStream
            </span>
          </h1>
        </div>

        <div className="space-y-8">
          <div className="about_style">
            <h2 className="about_main_title">What is GiggleStream?</h2>
            <p className="about_main_para">
              GiggleStream is a kid-friendly video platform that makes learning
              and entertainment more engaging. We believe that learning should
              be fun, and our interactive video player helps kids stay engaged
              while watching educational content.
            </p>
          </div>

          <div className="about_style">
            <h2 className="about_main_title">How It Works</h2>
            <p className="about_main_para">
              Our platform features a collection of carefully curated videos
              that kids can watch and interact with. The video player includes
              special features like timestamp comments, allowing kids to share
              their thoughts at specific moments in the video. This makes
              learning more interactive and helps kids engage with the content
              in a meaningful way.
            </p>
          </div>

          <div className="about_style">
            <h2 className="about_main_title">Our Mission</h2>
            <p className="about_main_para">
              We're on a mission to make learning fun and interactive for kids
              everywhere. By combining entertainment with education, we create
              an environment where kids can learn while having fun. Our platform
              is designed to be safe, engaging, and easy to use for young
              learners.
            </p>
          </div>

          <div className="about_style">
            <h2 className="about_main_title">Get Started</h2>
            <p className="about_main_para mb-6">
              Ready to start your learning adventure? Browse our collection of
              videos, watch them with our interactive player, and share your
              thoughts with others. Learning has never been this fun!
            </p>
            <Link
              to="/player"
              className="inline-block px-8 py-3 text-xl font-bold text-white bg-[#B85C38] border-4 border-[#4A2C2A] rounded-xl shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(74,44,42,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#4A2C2A]"
            >
              Start Watching
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
