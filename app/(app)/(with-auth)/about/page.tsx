import Certificate from "@/components/Certificate/Certificate";
import WorkProcess from "@/components/WorkProcess/workProcess";
import Counter from "@/components/counter/counter";

export default function About() {
  return (
    <div className="">
      {/* About Section */}
      <div className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center lg:mb-8">
          <div className="md:pr-8">
            <h2 className="h1-title mb-4">
              Bhavya is One Of The Best Quartz Stone Company
            </h2>
            <p className="mb-4 justify-center">
              We are one of the most leading companies in the manufacture and
              exporter of quality quartz stone in India.
            </p>
            <p className="justify-center">
              Our company provides an exclusive range of quartz stones counter
              top which has many qualities such as it is durable, strong
              non-porous, attractive colors, smooth, etc.
            </p>
            <p className="justify-center">
              These all stones are rigorously quality tested by our highly
              qualified team of quality testers that help us to ensure that the
              end product is completely faultless and has a longer shelf life.
            </p>
          </div>
        </section>
      </div>

      {/* Work Process Section */}
      <WorkProcess />

      {/* Stats Section */}
      <div className="container px-4">
        <section className="bg-primary rounded-xl mt-4 sm:mt-10 lg:mt-14 py-10 sm:py-16 lg:py-20 px-4 gap-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-white">
          <div className="mb-8 md:mb-0">
            <Counter endValue={5} duration={2000} />
            <p className="text-20 font-600 mt-2">Years of Experience</p>
          </div>
          <div className="mb-8 md:mb-0">
            <Counter endValue={15} duration={2000} />
            <p className="text-20 font-600 mt-2">Team members</p>
          </div>
          <div className="mb-8 md:mb-0">
            <Counter endValue={250} duration={2000} />
            <p className="text-20 font-600 mt-2">Successful Projects</p>
          </div>
          <div>
            <Counter endValue={20} duration={2000} />
            <p className="text-20 font-600 mt-2">Happy Clients</p>
          </div>
        </section>
      </div>

      {/* Certificates Section */}
      <section className="py-4 sm:py-10 lg:py-14">
        <h2 className="h1-title text-center md:mb-4 lg:mb-8">Certificates</h2>
        <Certificate />
      </section>
    </div>
  );
}
