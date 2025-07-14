const Contact = () => (
  <section id="contact" className="flex flex-col items-center gap-2 py-12">
    <div className="w-full max-w-4xl">
      <h2 className="text-3xl font-semibold mb-2">연락처</h2>
      <p>이메일: <a href="mailto:jaeah@email.com" className="text-blue-600 dark:text-blue-400 hover:underline">jaeah@email.com</a></p>
      <p>인스타그램: <a href="https://instagram.com/jaeah_breath" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">@jaeah_breath</a></p>
      <p>카카오톡: <span className="text-gray-700 dark:text-gray-300">jaeah_meditation</span></p>
    </div>
  </section>
);

export default Contact; 