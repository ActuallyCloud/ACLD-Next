import Link from 'next/link'

export default function RedirectComponent(destination) {
   const discord = "https://discord.com/invite/JQu5k4W6pT";
   const github = "https://github.com/ActuallyCloud";
   const github_ACLD = "https://github.com/ActuallyCloud/ACLD";
   const email = "mailto:c@acld.me";
   const status = "https://cloud.instatus.com";
   const wellnessadd = "https://discord.com/api/oauth2/authorize?client_id=580904388911169537&permissions=18432&scope=applications.commands%20bot";
   const figma_linker = "https://www.figma.com/proto/Hg8flxttRtx0qVc2obWXg9/Linker?type=design&node-id=1-2&t=qDSNgGGG3OLeuw37-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design";

   const selectDestination = () => {
      var finaldest = "";
      if (destination.link == "discord") {
         finaldest = discord;
      } else if (destination.link == "github") {
         finaldest = github;
      } else if (destination.link == "github_ACLD") {
         finaldest = github_ACLD;
      } else if (destination.link == "email") {
         finaldest = email;
      } else if (destination.link == "status") {
         finaldest = status;
      } else if (destination.link == "wellnessadd") {
         finaldest = wellnessadd;
      } else if (destination.link == "figma_linker") {
         finaldest = figma_linker;
      }
      return finaldest;
   }

   return (
      selectDestination()
   )
}
