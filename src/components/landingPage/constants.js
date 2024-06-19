import custom from "../../assets/icons/custom.png";
import dashboard from "../../assets/icons/dashboard.png";
import data_analysis from "../../assets/icons/data_analysis.png";
import data_mining from "../../assets/icons/data_mining.png";
import DataAnalysisImage from "../../assets/images/data_analysis.jpg";
import DataIntegrationImage from "../../assets/images/data_integration.jpg";
import CustomSolutionsImage from "../../assets/images/custom_solutions.jpg";
import DashboardServicesImage from "../../assets/images/dashboard_services.jpg";

export const offeredServices = [
  {
    title: "Data Integration",
    subTitle: "Your Success Partner",
    description:
      "Knowing what data can be leveraged for business insights is only the first step. How to integrate that data into a business intelligence solution can be complicated and time consuming. We use powerful tools to extract your existing data and turn it into meaningful information to be available on-demand for real time decision making.",
    icon: data_mining,
    image: DataIntegrationImage,
  },
  {
    title: "Custom Solutions",
    subTitle: "Tailored for You",
    description:
      "Use custom software unique to your organization? No problem. While our out-of-box solution can use data from most popular accounting, spreadsheeting, CRM, and ERP systems, we also design solutions to work with your custom data sources at surprisingly reasonable rates. Getting real-time business intelligence insights at your fingertips doesn't need to require a major IT investment.",
    icon: custom,
    image: CustomSolutionsImage,
  },
  {
    title: "Dashboard Services",
    subTitle: "Elevating Your Business",
    description:
      "Our dashboard services are highly sought after for their beauty and versatility. Customizable dashboards offer individualized business insights based on the role of the user at your organization, and the ability to easily share those insights across the team or organization.",
    icon: dashboard,
    image: DashboardServicesImage,
  },
  {
    title: "Data Analysis",
    subTitle: "Your Data Experts",
    description:
      "Unsure about what should be measured and why? You will receive personalized consulting based on our many years of accounting and data analytics experience to determine the performance indicators that are most critical to your organization's goals. We don't just offer a tech solution, we teach you how to leverage it for success. ",
    icon: data_analysis,
    image: DataAnalysisImage,
  },
];

export const ownerSectionDetails = {
  header: "My Story",
  name: "Jonathan Trexel",
  title: "Owner Operator",
  storyMessage: [
    "Before my technology career I spent years auditing small businesses. I gained a deep understanding of business processes and how to leverage accounting and other business data.",
    "While working for the Federal government, I spent two years developing a framework for data-driven management decision making that was implemented division-wide and led to a Commissioners Award for excellence. What it taught me was that it only takes gathering and analyzing a small amount of the most important data to get powerful insights.",
    "After this I spent another three years in the private sector building custom web-based solutions to extract data and present them in meaningful ways, such as in data dashboards for the retail, manufacturing and finance industries. What it taught me was that building custom solutions is costly.",
    "That's why I started this company: I've discovered a better way to bring affordable business insights to small businesses and government agencies.",
  ],
};
