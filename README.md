![image](https://github.com/user-attachments/assets/5053e7be-c6d8-47e9-8034-ef7b3e3b31fb)



Hey Salesforce Developers!

I'm excited to share a repository with you that contains code for a responsive Lightning Web Component (LWC) navigation bar. With a simple drag-and-drop, this component allows you to easily build a fully functional navigation bar without the need to write any code!

Key Parameters:
Navigation Item (JSON):

This input accepts a list of objects where each object includes key-value pairs such as:
json
Copy code
[
  {
    "label": "Home",
    "target": "/home",
    "openInNewTab": false,
    "icon": "utility:agent_home",
    "subItems": [ /* Array of objects with the same attributes */ ]
  }
]
Example:
json
Copy code
[
  {
    "label": "Home",
    "target": "/home",
    "openInNewTab": false,
    "icon": "utility:agent_home"
  },
  {
    "label": "About Us",
    "target": "/about",
    "openInNewTab": false,
    "icon": "utility:groups",
    "subItems": [
      {
        "label": "Team",
        "target": "/team",
        "openInNewTab": false,
        "icon": "utility:buyer_group_qualifier",
        "subItems": [
          {
            "label": "Teams",
            "target": "/team",
            "openInNewTab": false,
            "icon": "utility:buyer_group_qualifier"
          },
          {
            "label": "Histories",
            "target": "/history",
            "openInNewTab": false,
            "icon": "utility:real_time"
          }
        ]
      },
      {
        "label": "History",
        "target": "/history",
        "openInNewTab": false,
        "icon": "utility:real_time"
      }
    ]
  },
  {
    "label": "Services",
    "target": "/services",
    "openInNewTab": true,
    "icon": "utility:questions_and_answers"
  },
  {
    "label": "Blog",
    "target": "/blog",
    "openInNewTab": true,
    "icon": "utility:knowledge_base"
  },
  {
    "label": "Career",
    "target": "/career",
    "openInNewTab": true,
    "icon": "utility:trending"
  }
]
Show Profile Nav Item (Checkbox)

Show Logout Nav Item (Checkbox)

Company Logo CSS for Desktop, Tablet, and Mobile views

Profile Page URL

Logout Page URL

To get started, create a static resource named "CompanyLogo". The component will automatically fetch this logo, or you can clone this repo and modify the JS to suit your needs.

Feel free to tweak the CSS by cloning the repository to match your branding!

Thank you, and happy learning!



