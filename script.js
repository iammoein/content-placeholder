const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500);

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, ab';
  profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="">';
  authorName.innerHTML = 'Alex Doe';
  date.innerHTML = 'Jan 19, 2024';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
