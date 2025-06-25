import { motion } from 'framer-motion'

function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-20 p-6"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">侍</span>
          </div>
          <span className="text-white font-bold text-xl">LOGO</span>
        </motion.div> */}

        {/* Navigation Links */}
        {/* <div className="flex space-x-8">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#ef4444" }}
            className="text-white font-medium text-lg transition-colors"
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#ef4444" }}
            className="text-white font-medium text-lg transition-colors"
          >
            History
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: "#ef4444" }}
            className="text-white font-medium text-lg transition-colors"
          >
            Facts
          </motion.a>
        </div> */}
      </div>
    </motion.nav>
  )
}

export default Navigation

