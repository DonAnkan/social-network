    // Add your JavaScript code here
    // Example: Handle post submission, display posts, handle friend requests, etc.
 
    document.addEventListener("DOMContentLoaded", function() {
  const postForm = document.getElementById("postForm");
  const postContent = document.getElementById("postContent");
  const newsFeed = document.getElementById("news-feed");

  // Dummy data for demonstration
  const posts = [
    { username: "User1", content: "This is my first post!" },
    { username: "User2", content: "Hello world!" },
    { username: "User3", content: "I love coding!" }
  ];

  // Function to display posts in the news feed
  function displayPosts() {
    newsFeed.innerHTML = ""; // Clear existing posts
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
        <strong>${post.username}</strong>
        <p>${post.content}</p>
      `;
      newsFeed.appendChild(postElement);
    });
  }

  // Function to handle post submission
  function handlePostSubmission(event) {
    event.preventDefault(); // Prevent form submission
    const newPostContent = postContent.value.trim();
    if (newPostContent !== "") {
      // Add the new post to the posts array
      posts.unshift({ username: "CurrentUser", content: newPostContent });
      // Display the updated posts
      displayPosts();
      // Clear the post input field
      postContent.value = "";
    }
  }

  // Event listener for post form submission
  postForm.addEventListener("submit", handlePostSubmission);

  // Initial display of posts
  displayPosts();
});
document.addEventListener("DOMContentLoaded", function() {
  // Dummy user data for demonstration
  const user = {
    username: "Ankan",
    fullName: "Ankan Sen",
    email: "ankans228@gmail.com",
    bio: "Web Developer",
    location: "INDIA",
    profileImage: "lol.jpg"
  };

  // Function to display user profile information
  function displayProfile() {
    const profileInfo = document.getElementById("profileInfo");
    profileInfo.innerHTML = `
      <img src="${user.profileImage}"alt="Profile Image" style="width:100px;height:auto;">
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Full Name:</strong> ${user.fullName}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Bio:</strong> ${user.bio}</p>
      <p><strong>Location:</strong> ${user.location}</p>
    `;
  }

  // Call the displayProfile function to initially display user profile
  displayProfile();
});

document.addEventListener("DOMContentLoaded", function() {
  const postForm = document.getElementById("postForm");
  const postContent = document.getElementById("postContent");
  const postImage = document.getElementById("postImage");
  const newsFeed = document.getElementById("news-feed");

  // Function to handle post submission
  function handlePostSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Get post content and image files
    const newPostContent = postContent.value.trim();
    const imageFiles = postImage.files;

    // Create new post object
    const newPost = {
      content: newPostContent,
      images: []
    };

    // Add images to new post object
    for (let i = 0; i < imageFiles.length; i++) {
      const image = imageFiles[i];
      newPost.images.push({
        name: image.name,
        size: image.size,
        type: image.type
        // You can include other properties as needed
      });
    }

    // Reset post form
    postContent.value = "";
    postImage.value = "";

    // Display the new post in the news feed
    displayPost(newPost);
  }

  // Function to display a post in the news feed
  function displayPost(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <p>${post.content}</p>
      <div class="post-images">
        ${post.images.map(image => `<img src="${URL.createObjectURL(image)}" alt="${image.name}">`).join("")}
      </div>
    `;
    newsFeed.prepend(postElement);
  }

  // Event listener for post form submission
  postForm.addEventListener("submit", handlePostSubmission);
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch list of friends from the server (dummy function for demonstration)
    function fetchFriendsList() {
      // Dummy list of friends
      return [
        { id: 1, name: "Friend 1", profileImage: "image3.jpg" },
        { id: 2, name: "Friend 2", profileImage: "image1.jpg" },
        { id: 3, name: "Friend 3", profileImage: "image2.jpg" }
      ];
    }
  
    // Function to display list of friends
    function displayFriendsList() {
      const friendsList = document.getElementById("friendsList");
      const friends = fetchFriendsList(); // Fetch list of friends from server
  
      // Clear existing friend cards
      friendsList.innerHTML = "";
  
      // Create friend card for each friend
      friends.forEach(friend => {
        const friendCard = document.createElement("div");
        friendCard.classList.add("friend-card");
        friendCard.innerHTML = `
          <img src="${friend.profileImage}" alt="${friend.name}">
          <p>${friend.name}</p>
        `;
        friendsList.appendChild(friendCard);
      });
    }
  
    // Call the displayFriendsList function to initially display list of friends
    displayFriendsList();
  });
  
  //friend

  function fetchFriendsList() {
    // Replace 'https://example.com/api/friends' with the actual API endpoint URL
    return fetch('https://example.com/api/friends')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        console.error('Error fetching friends list:', error);
        return []; // Return an empty array if there's an error
      });
  }
  fetchFriendsList()
  .then(friends => {
    // Do something with the list of friends
    console.log(friends);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

  
