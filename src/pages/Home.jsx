import { motion } from 'framer-motion';

const Home = () => {

    const skillsPics = [
        { name: 'React', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/b2awgzivo1jyypzjy83c.png' },
        { name: 'JavaScript', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/y5op4ipnwcbbnhi7weu6.png' },
        { name: 'Express', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/az01veztt5znwzngu2bz.png' },
        { name: 'HTML5', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/neowtyyhlvafdx0n3tum.png' },
        { name: 'CSS', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/cbpbfmp5p4iuqoshtrup.png' },
        { name: 'Node.js', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695855096/rykyv8ds5s55uhqou9oe.png' },
        { name: 'Git', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841268/nq37zp9f5rgc4a7szhvu.png' },
        { name: 'TypeScript', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/r6uv8u9mrmvcuj0ap5zk.png' },
        { name: 'MongoDB', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/ldlyqvke3zaovopvtmno.png' },
        { name: 'Tailwind', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/plazwtwfa3pakdazxxw7.png' },
        { name: 'Cloudinary', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/t_cloud/pbretokp8mgrcgksud77.jpg' },
        { name: 'Postman', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/brhm6p9xi9uhiot322ps.png' },
        { name: 'Visual Studio', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695841267/mol0qcv8nguoiuhyiq6q.jpg' },
        { name: 'Bootstrap', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/t_bootstrap/vbo0ncppqoapuwcn1jr6.jpg' },
        { name: 'Vite', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695871132/ehvf1ezwy0r374udukik.png'}

    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

      const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

    return (
        <div>
        <div className="container mx-4 px-5 py-20 items-center flex-wrap">
          <motion.h1
            className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Welcome!
          </motion.h1>
          <motion.p
            className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hi! my name is Juan Reyes, as a Full Stack Developer, I've had the privilege of working on a diverse range of projects, from creating interactive web applications to building robust backend systems. My dedication to mastering both frontend and backend technologies enables me to bring comprehensive solutions to life.
            <br /><br />
            In this portfolio, you'll find examples of my coding problem-solving abilities, and a commitment to clean, efficient, and scalable code. Whether you're an employer seeking a capable developer or a fellow enthusiast of the tech world, I invite you to explore my projects and get to know my capabilities.
          </motion.p>
        </div>
  
        <div className="container mx-4 px-5 py-5 flex-wrap">
          <motion.h1
            className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            My Skills
          </motion.h1>
          <br />
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsPics.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={skill.imageSrc} alt={`${skill.name} Logo`} className="mx-auto h-16" />
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <br />
        </div>
      </div>
    )
}

export default Home