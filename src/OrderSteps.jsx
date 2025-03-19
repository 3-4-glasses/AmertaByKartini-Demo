import './OrderSteps.css';
import { FaRegUser, FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import { BiImageAdd } from 'react-icons/bi';
import flowerImg from './assets/flower1.jpg';

<img src={flowerImg} alt="Flower Decoration" className="w-64 h-auto" />

function OrderSteps() {
  const steps = [
    {
      number: '01.',
      title: 'Send inspiration',
      icon: <BiImageAdd size={28} />,
      description: 'Choose decoration or send photos of decoration to us!',
    },
    {
      number: '02.',
      title: 'Partial payment',
      icon: <MdOutlinePayment size={28} />,
      description: '50% DP to secure a slot.',
    },
    {
      number: '03.',
      title: 'Discuss',
      icon: <FaRegUser size={28} />,
      description: 'Add any concepts and design with our specialist.',
    },
    {
      number: '04.',
      title: 'Final design',
      icon: <FaRegCheckCircle size={28} />,
      description: 'Design will be completed with color proof.',
    },
    {
      number: '05.',
      title: 'Approval',
      icon: <RiVerifiedBadgeLine size={28} />,
      description: 'Decoration will be worked on according to the design on the specified day.',
    },
    {
      number: '06.',
      title: 'Final payment',
      icon: <MdOutlinePayment size={28} />,
      description: 'Work will be declared as finished and no further changes will be made.',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#f8f7f3] flex flex-col items-center justify-center px-4 py-10">
        <section className="w-full max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col justify-between relative">
            <img src="/images/flower.png" alt="Flower Decoration" className="absolute top-0 left-0 w-64 h-auto opacity-20 -z-10"/>
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">How to Order</h2>
                <h1 className="text-2xl font-bold text-[#77815C] mb-10">Step-by-step</h1>
              </div>

              <div className="mt-10">
                <p className="text-sm text-gray-500 mb-4 ">
                  For more details on payment please read below:
                </p>
                <button className="bg-[#E9DCC9]! text-black px-4 py-2 rounded-full text-sm shadow">
                  Terms and Conditions
                </button>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start p-4 bg-[#f8f7f3] rounded-xl shadow space-y-1"
                  >
                    <span className="text-lg font-bold text-gray-800">{step.number}</span>
                    <div className="flex items-center">
                      <h3 className="font-bold text-gray-800">{step.title}</h3>
                      <div className="text-[#4B4B4B] ml-2">{step.icon}</div>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderSteps;
