const { RESTDataSource } = require("apollo-datasource-rest");

//this is what you'd use instead of doing multiple, unecessary fetch requests to get the data from an API
class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }
  getTracksForHome() {
    return this.get("tracks");
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }
  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
module.exports = TrackAPI;
