/**
 * A WRAPPER FOR AXIOS HTTP SERVICES
 */

 import axios from "axios";

 const APIService = {
   get: (url, params = {}) => {
     return axios.get(url, { params }).then(response => response);
   },
   post: (url, data) => {
     return axios.post(url, data).then(response => response);
   },
   put: (url, data) => {
     return axios.put(url, data).then(response => response);
   },
   delete: url => {
     return axios.delete(url).then(response => response);
   },
   patch: (url, data, params = {}) => {
     return axios.patch(url, data, { params }).then(response => response);
   }
 };
 
 export const addHeaders = (key, value) => {
   axios.defaults.headers.common[key] = value;
 };
 
 export const removeHeaders = key => {
   delete axios.defaults.headers.common[key];
 };
 
 export const { get: GET, post: POST, put: PUT, delete: DELETE, patch: PATCH } = APIService;
 