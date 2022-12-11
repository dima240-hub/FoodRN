import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ZOY9zVg2YZ6lDhAQ8qE3kDQdXYd-M6h7Jfpn--8ZSmSyJzY1_738UZPPS9mAWSGaisB4ymYxjux4GM4dqMepnycN5PJ6zyusSrIDo_IuFI4Njq9DydOP_lERsjgCY3Yx",
  },
});
