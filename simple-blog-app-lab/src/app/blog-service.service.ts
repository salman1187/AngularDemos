import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  blogs = [
    {
      blogId: 1,
      blogTitle: "REST APIs",
      blogDescription: "How They Work and What You Need to Know.",
      blogContent: `To understand what is REST API, we need to review some key terms. 

      A client is a person or program using the API. The client makes requests to the API to retrieve some information or change something within the application. Your web browser is a client — it interacts with APIs different websites to get page content from them. The requested info is sent back to your browser and displayed on your screen.
      
      A resource is any piece of information that the API can provide the client. For instance, a resource in Facebook’s API could be a user, a page, a photo, or a post. Each resource has a unique name, called the resource identifier.
      
      A server is used by the application that receives client requests and contains resources that the client wants. The server has an API to interact with clients without giving them direct access to content stored in its database.
      
      How RESTful APIs Work
      Now for our definition. REST is a set of guidelines that software can use to communicate over the internet to make integrations simple and scalable. A REST API (also called a “RESTful” API) is a specific type of API that follows these guidelines.
      
      REST stands for Representational State Transfer. When a client requests a resource using a REST API, the server transfers back the current state of the resource in a standardized representation.`
    },
    {
      blogId: 2,
      blogTitle: "9 Bad Sales Habits",
      blogDescription: "(& How to Break Them In 2024), According to Sales Leaders",
      blogContent: `1. Only Having One-Way Conversations
      Baidhurya Mani, Founder of SellCoursesOnline, says, “Bad salespeople only have one-way conversations. They often get so carried away talking too much that they monopolize the conversation and forget to listen to their customers. While it's important to articulate an excellent sales pitch, don't forget that sales is a two-way conversation first and foremost.”
      
      “Veteran salespeople know to let the client do most of the talking. Your job as a salesperson is to listen actively and empathize with them, all while processing and analyzing the information you're drawing out from them. This is how you can get to know your customer and their pain points better, so you can position your pitch appropriately.”`
    },
    {
      blogId: 3,
      blogTitle: "How to Make a Survey with a QR Code",
      blogDescription: "Collecting customer information to gain market insight is the best way to make data-driven business decisions. But how can you ensure your survey reaches the greatest number of people possible? By using a QR Code survey.",
      blogContent: `It’s official: You’re interested in harnessing the power of the QR code survey to gather information from your customers. That’s great news — and the even greater news is that building your own isn’t as tricky as you may think it is. Here’s how to do it.

      Start with the survey.
      You can choose to start with a pre-existing template to expedite the survey creation process, or you can customize your survey with HubSpot’s CMS.
      
      You’ll have higher completion rates if you have your teammates take your survey first — particularly if they can take it via the channel you intend to launch it on. Iterate the survey by folding in their feedback before finalizing.
      
      Grab the link to your completed survey for the next step.`
    }
  ];

  getBlogs(){
    return this.blogs;
  }
  getBlogById(id: number){
    return this.getBlogs().find(b => b.blogId === id);
  }

  constructor() { }

}