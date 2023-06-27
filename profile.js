document.getElementById('saveChangesBtn').addEventListener('click', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullNameInput').value;
    const email = document.getElementById('emailInput').value;
  
    document.querySelector('.text-white.mt-2').textContent = fullName;
    document.querySelector('.text-white.mt-2 + h5').textContent = email;
  });
  
 // Store the image URLs in an array
const imageUrls = [
   'https://i.pinimg.com/474x/fb/e7/40/fbe740795b8ac37f99219c127a467b9d.jpg', 
    'https://static.wikia.nocookie.net/youtubia-viet-nam/images/f/fe/Ado.jpg/revision/latest?cb=20220217123034&path-prefix=vi',
    'https://i.pinimg.com/236x/c4/03/b5/c403b51c014e6753e327abd8e38269db.jpg',
    'https://i.pinimg.com/736x/af/6b/d2/af6bd28d2f7f65736830b28154f6fc82.jpg',
    'https://64.media.tumblr.com/19bfb7fffae85f3fcb0a65e8c0851bcb/tumblr_pipeo8KbpW1xxxd2qo10_r1_400.jpg',
    'https://favim.com/pd/p/orig/2019/04/05/anime-icons-blonde-Favim.com-7053790.jpg',
    'https://animesher.com/orig/2/203/2038/20382/animesher.com_kaori-icono-icons-2038260.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIlWr-oG5EhWcq_X1fz6JamdVHp8QScc-qeUsixHW7gt3vsK3n2Sh7Oy7AHBQwHSl8qY&usqp=CAU',
    'https://i.pinimg.com/474x/ce/78/cd/ce78cdab41898ca97be0ad6a28c5906c.jpg',
    'https://animesher.com/previews/webp/1/193/1930/19300/1930057.webp',
    // Add more image URLs here
  ];
  
  // Get the image elements
  const userImageCircle = document.querySelector('.thumb-lg.img-circle');
  const userProfileImage = document.querySelector('#img-profile');
  
  // Initialize the image index
  let imageIndex = 0;
  
  // Function to change the user image
  function changeUserImage() {
    // Increment the image index
    imageIndex = (imageIndex + 1) % imageUrls.length;
  
    // Set the new image URLs
    userImageCircle.src = imageUrls[imageIndex];
    userProfileImage.src = imageUrls[imageIndex];
  }
  
  // Call the changeUserImage function initially to set the first image
  changeUserImage();
  
  // Add a click event listener to the user image elements
  userImageCircle.addEventListener('click', changeUserImage);
  userProfileImage.addEventListener('click', changeUserImage);
  