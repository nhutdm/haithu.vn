function Footer() {
  const now = new Date()
  const currentYear = now.getFullYear()

  return (
    <footer className="bg-stack-100 px-8 pt-16">
      <div className="flex flex-col md:flex-row container mx-auto max-w-5xl">
        <div className="flex-full md:basis-4/12 pb-4">
          <h3 className="pb-6 text-stack-800 underline decoration-4 underline-offset-4 decoration-stack-400">
            Dịch Vụ Tang Lễ Hai Thư
          </h3>
          <div className="font-serif">
            <p>
              326 Hùng Vương
              <br />
              Lạc Thiện 2, Thị trấn D’Ran
              <br />
              Huyện Đơn Dương
              <br /> Tỉnh Lâm Đồng
            </p>
          </div>
        </div>
        <div className="flex-full md:basis-4/12 pb-4">
          <h3 className="pb-6 text-stack-800 underline decoration-4 underline-offset-4 decoration-stack-400">
            Liên Hệ
          </h3>
          <div className="font-serif">
            <p>
              <span className="font-sans text-sm">Điện Thoại</span>
              <br />
              <span>
                <a
                  className="text-stack-500 hover:text-stack-600 underline py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+84986815702"
                >
                  0986 815 702
                </a>{' '}
                |{' '}
                <a
                  className="text-stack-500 hover:text-stack-600 underline py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+84987636794"
                >
                  0987 636 794
                </a>
              </span>
            </p>
            <p>
              <span className="font-sans text-sm">Zalo</span>
              <br />
              <span>
                <a
                  className="text-stack-500 hover:text-stack-600 underline py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+84983143459"
                >
                  0983 143 459
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="flex-full md:basis-4/12 pb-4">
          <h3 className="pb-6 text-stack-800 underline decoration-4 underline-offset-4 decoration-stack-400">
            Mạng Xã Hội
          </h3>
          <div className="font-serif">
            <p>
              <span>
                <a
                  className="text-stack-500 hover:text-stack-600 underline py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/HaiThu.DonDuong/"
                >
                  Facebook
                </a>
              </span>
            </p>
            <p>
              <span>
                <a
                  className="text-stack-500 hover:text-stack-600 underline py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/dir/10.737437,106.6702616/11.8303158,108.5830941"
                >
                  Google Map
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto py-4 font-serif text-xs text-center">
        <span>&copy; {currentYear} Hai Thư</span>
      </div>
    </footer>
  )
}

export default Footer
