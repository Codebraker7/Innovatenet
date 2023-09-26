import axios, * as others from 'axios';
// const axios = require('axios');
// import axios from "axios";

// const crypto = require('crypto');
// function generateUniqueId(input) {
//     const hash = crypto.createHash('sha512');
//     hash.update(input.toString());
//     return hash.digest('hex');
// }

// Hello

const baseURL = 'https://busy-erin-deer-shoe.cyclic.cloud/';

// CREATE PROJECT
export const createProject = async (project) => {
  // project.id = generateUniqueId(project);
  // console.log(project.id)

  var result = {};

  await axios
    .post(baseURL + 'projects', project)
    .then((res) => {
      // Handle the success response here
      result = res.data;
      console.log(res);
    })
    .catch((error) => {
      // Handle any errors that occur during the POST request
      console.error('Error:', error);
    });

  const request = {
    project_id: result.id,
    student_id: result.student_id,
    university_id: result.university_id,
    approval_status: result.approval_status,
    timestamp: new Date(Date.now()).toISOString(),
  };

  await axios
    .post(baseURL + 'project_requests', request)
    .then((res) => {
      // Handle the success response here
      console.log(res);
    })
    .catch((error) => {
      // Handle any errors that occur during the POST request
      console.error('Error:', error);
    });
};

// const project10 = {
//     "title": "Smart Traffic System",
//     "category": "IoT",
//     "stream": "ECE",
//     "caption": "Built a smart traffic management system using Arduino and sensors",
//     "media": ["traffic.png"],
//     "student_id": 10,
//     "university_id": 3,
//     "approval_status": false,
//     "posted_on": "2023-02-24T19:15:41Z",
//     "likes": [],
//     "comments": []
// }
// createProject(project10);

// APPROVE REQUEST
export const approveRequest = async (request_id) => {
  await axios
    .patch(baseURL + `projects/${request_id}`, { approval_status: 'approved' })
    .then((response) => {
      // Handle the success response here
      console.log('PATCH request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
};
// approveRequest(1)

// DECLINE REQUEST
export const declineRequest = async (project_id) => {
  await axios
    .patch(baseURL + `projects/${project_id}`, { approval_status: 'declined' })
    .then((response) => {
      // Handle the success response here
      console.log('PATCH request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
};
// declineRequest(1);

// LIKE PROJECT
export const getLikes = async (project_id) => {
  var result = [];
  await axios
    .get(baseURL + `projects/${project_id}`)
    .then((response) => {
      result = response.data.likes;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
};

export const likeProject = async (student_id, project_id) => {
  const likesList = await getLikes(project_id);
  const index = likesList.indexOf(student_id);
  if (index === -1) {
    likesList.push(student_id);
  }

  await axios
    .patch(baseURL + `projects/${project_id}`, { likes: likesList })
    .then((response) => {
      // Handle the success response here
      console.log('PATCH request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
};
// likeProject(1, 1);

export const getLikeCount = async (project_id) => {
  const likesList = await getLikes(project_id);
  return likesList.length;
};
// getLikeCount(1);

// UNLIKE PROJECT
export const unlikeProject = async (student_id, project_id) => {
  const likesList = await getLikes(project_id);
  const index = likesList.indexOf(student_id);
  if (index !== -1) {
    likesList.splice(index, 1);
  }

  await axios
    .patch(baseURL + `projects/${project_id}`, { likes: likesList })
    .then((response) => {
      // Handle the success response here
      console.log('PATCH request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
};
// unlikeProject(3, 1);

// comment_on_project
export const getComments = async (project_id) => {
  var result = [];
  await axios
    .get(baseURL + `projects/${project_id}`)
    .then((response) => {
      result = response.data.comments;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log(result);
  return result.length > 0 ? result : [];
};

export const commentOnProject = async (project_id, student_id, content) => {
  var commentsList = await getComments(project_id);

  const comment = {
    project_id: project_id,
    student_id: student_id,
    content: content.toString(),
    timestamp: new Date(Date.now()).toISOString(),
  };

  await axios
    .post(baseURL + 'post_comments', comment)
    .then((response) => {
      // Handle the success response here
      commentsList.push(response.data.id);
      console.log('POST request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  await axios
    .patch(baseURL + `projects/${project_id}`, { comments: commentsList })
    .then((response) => {
      // Handle the success response here
      // console.log('POST request successful:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
};
// commentOnProject(1, 1, "Awesome Project");

// get_student_data
export const getStudentData = async (student_id) => {
  var studentData = {};
  await axios
    .get(baseURL + `students/${student_id}`)
    .then((response) => {
      // Handle the success response here
      studentData = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  // console.log(studentData);
  return studentData;
};
// getStudentData(1);

// get_student_projects
export const getStudentProjects = async (student_id) => {
  var studentProjects = [];
  await axios
    .get(baseURL + `projects?student_id=${student_id}`)
    .then((response) => {
      // Handle the success response here
      studentProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  console.log(studentProjects);
  return studentProjects;
};
// getStudentProjects(1);

// get_university_data
export const getuniversityData = async (university_id) => {
  var universityData = {};
  await axios
    .get(baseURL + `universities/${university_id}`)
    .then((response) => {
      // Handle the success response here
      universityData = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });
  return universityData;
};
// getuniversityData(1);

// get_university_projects
export const getUniversityProjects = async (university_id) => {
  var universityProjects = [];
  await axios
    .get(baseURL + `projects?university_id=${university_id}`)
    .then((response) => {
      // Handle the success response here
      universityProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  // console.log(universityProjects);
  return universityProjects;
};
// getUniversityProjects(1);

// search_projects (by university or stream or none)
const param1 = {
  university_id: 1,
  category: 'AI',
};
export const searchProjects = async (parameter) => {
  var URL = baseURL + 'projects?';
  if (parameter.university_id) {
    URL = URL + `university_id=${parameter.university_id}`;
  }
  if (parameter.category) {
    URL =
      URL +
      `${
        parameter.university_id ? '&' : ''
      }category=${parameter.category.toString()}`;
  }

  console.log(URL);

  var searchedProjects = [];
  await axios
    .get(URL)
    .then((response) => {
      // Handle the success response here
      searchedProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  console.log(searchedProjects);
  return searchedProjects;
};
// searchProjects(param1)

// get all given status
export const getAllStatusProjects = async (status) => {
  var getProjects = [];
  await axios
    .get(baseURL + `projects?approval_status=${status}`)
    .then((response) => {
      // Handle the success response here
      getProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  console.log(getProjects);
  return getProjects;
};
// getAllStatusProjects('decline');

// get all given student and status
const param2 = {
  student_id: 2,
  status: 'success',
};
export const getAllStudentStatusProjects = async (parameter) => {
  var URL = baseURL + 'projects?';
  if (parameter.student_id) {
    URL = URL + `student_id=${parameter.student_id}`;
  }
  if (parameter.status) {
    URL =
      URL +
      `${
        parameter.student_id ? '&' : ''
      }approval_status=${parameter.status.toString()}`;
  }

  console.log(URL);

  var searchedProjects = [];
  await axios
    .get(URL)
    .then((response) => {
      // Handle the success response here
      searchedProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  console.log(searchedProjects);
  return searchedProjects;
};
// getAllStudentStatusProjects(param2);

// get all given university and status
const param3 = {
  university_id: 2,
  status: 'waiting',
};
export const getAllUniversityStatusProjects = async (parameter) => {
  var URL = baseURL + 'projects?';
  if (parameter.university_id) {
    URL = URL + `university_id=${parameter.university_id}`;
  }
  if (parameter.status) {
    URL =
      URL +
      `${
        parameter.university_id ? '&' : ''
      }approval_status=${parameter.status.toString()}`;
  }

  var searchedProjects = [];
  await axios
    .get(URL)
    .then((response) => {
      // Handle the success response here
      searchedProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  console.log(searchedProjects);
  return searchedProjects;
};

export const getStudentByEmail = async (email_id) => {
  var student = {};
  await axios
    .get(baseURL + `students?email=${email_id}`)
    .then((response) => {
      student = response.data[0];
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log(student);
  return student;
};

export const getUniversityByEmail = async (email_id) => {
  var university = {};
  await axios
    .get(baseURL + `universities?email=${email_id}`)
    .then((response) => {
      university = response.data[0];
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log(university);
  return university;
};

export const getUniversityPendingProjects = async (id) => {
  var universityProjects = [];
  await axios
    .get(baseURL + `projects?university_id=${id}&approval_status=waiting`)
    .then((response) => {
      // Handle the success response here
      universityProjects = response.data;
    })
    .catch((error) => {
      // Handle any errors that occur during the PATCH request
      console.error('Error:', error);
    });

  // console.log(universityProjects);
  return universityProjects;
};
// getAllUniversityStatusProjects(param3);

// follow_university

// unfollow_university

// PLAG CHECK
