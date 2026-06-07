import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false} // so it inherits parent animation
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Arif Bepari
          <motion.span
            className="text-sm text-pink-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            He / Him
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Full-Stack Developer & App Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
         "Jack of all trades, master of none… but always learning and exploring! 🛠️🌐📚✨"<br/><br/>
          Passionate about continuous growth and problem-solving, I love experimenting with new tools, improving performance, and delivering clean, efficient code that users enjoy interacting with 🎯🔥.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <Badge className="text-xs bg-pink-500">Growth Mindset</Badge>
          <Badge className="text-xs bg-pink-500">Problem Solving</Badge>
          <Badge className="text-xs bg-pink-500">Tech Explorer</Badge>
          <Badge className="text-xs bg-pink-500">Continuous Learner</Badge>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://instagram.frdp4-2.fna.fbcdn.net/v/t51.82787-19/704614437_18082823054634303_8804075631546183041_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.frdp4-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gEOJzSDlrmdBUbAL-GC0cl6r5rqPmnNkp9NqyAe6Z6fCmgVDmwrw3ushNi3s5GQyc1eRQ-pfp2ymy9Ug1DLs9J-&_nc_ohc=_O7n1hL8CCcQ7kNvwGXhz0l&_nc_gid=B1Yc2UEnkkCGnSlX72-NOg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af-yad4vgpzmw2sx89xGgJCyxwKfkV_MypmH4pTasypwog&oe=6A2BDC07&_nc_sid=7a9f4b"
            alt="Arif Bepari"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
