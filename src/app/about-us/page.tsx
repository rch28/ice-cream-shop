import HeaderText from "@/components/Common/HeaderText";
import { Factory, Heart, Star } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Unique Flavors" },
    { number: "10", label: "Retail Locations" },
    { number: "100K+", label: "Happy Customers" },
  ];

  const team = [
    {
      name: "Binod Rana",
      role: "Master Ice Cream Maker",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
      description: "With 5 years of experience in ice cream making",
    },
    {
      name: "Amit Sharma",
      role: "Head of Innovation",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "Leading our flavor development and creative initiatives",
    },
    {
      name: "Sita Bhandari",
      role: "Quality Assurance Director",
      image:
        "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHVzZXJzfGVufDB8fDB8fHww",
      description: "Ensuring the highest standards in every scoop",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2015, Ice Cream shop has been crafting premium ice cream using
            traditional methods and the finest ingredients. What started as a
            small family-owned shop has grown into a beloved brand, known for
            innovation and quality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <p className="text-4xl font-bold text-pink-500 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <HeaderText title="Our Mission" className="mb-6" />

              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ut consequatur similique, ea doloribus exercitationem
                ad? Culpa, numquam quisquam vitae similique tenetur provident
                neque temporibus modi nisi minus dolorem in.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Star className="text-pink-500" size={16} />
                  </div>
                  <span>Premium ingredients sourced locally</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Factory className="text-pink-500" size={16} />
                  </div>
                  <span>Sustainable production practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="text-pink-500" size={16} />
                  </div>
                  <span>Community involvement and support</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80"
                alt="Ice cream production"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <HeaderText title="Meet Our Team" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ image, name, role, description }, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg shadow-gray-300 overflow-hidden"
              >
                <div className="h-64">
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-pink-500 font-medium mb-3">{role}</p>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
