import React from 'react'

const Home = () => {
  return (
    <div className="flex-col flex lg:flex-row justify-between items-center text-xl gap-16 mx-4 px-4 my-2 ">
        <p className="text-white font-semibold px-10 ">
            Welcome to FOODMART.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sint est ea temporibus molestias velit qui nostrum, cumque libero non recusandae quibusdam reiciendis fugit eum doloremque tempore error nulla obcaecati id labore. Doloremque repudiandae recusandae ipsum, sed, amet dicta quas laborum molestiae atque harum dignissimos? Explicabo quam iste fugit quas.
        </p>
        <img className="object-fit" src="https://i.pinimg.com/564x/44/38/f2/4438f2b4553055db24250b65187c9ce7.jpg" alt="" />
    </div>
  )
}

export default Home
