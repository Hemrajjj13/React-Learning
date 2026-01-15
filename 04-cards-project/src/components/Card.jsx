import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <div className='top'>
          <img src={props.imgSrc} alt={props.company} />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className='center'>
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>
          <h2>{props.position}</h2>

          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply</button>
      </div>
    </div>
  )
}

export default Card

    // const jobOpenings = [
    //   {
    //     brandLogo: "https://logo.clearbit.com/google.com",
    //     companyName: "Google",
    //     datePosted: "5 days ago",
    //     position: "Senior Software Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$180k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/apple.com",
    //     companyName: "Apple",
    //     datePosted: "1 week ago",
    //     position: "iOS Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$160k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/amazon.com",
    //     companyName: "Amazon",
    //     datePosted: "3 days ago",
    //     position: "Cloud Architect",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$170k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/meta.com",
    //     companyName: "Meta",
    //     datePosted: "2 weeks ago",
    //     position: "Frontend Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$150/hr",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/netflix.com",
    //     companyName: "Netflix",
    //     datePosted: "6 days ago",
    //     position: "Senior UI Engineer",
    //     tag1: "Contract",
    //     tag2: "Senior Level",
    //     pay: "$180/hr",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/microsoft.com",
    //     companyName: "Microsoft",
    //     datePosted: "4 days ago",
    //     position: "Backend Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$165k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/google.com",
    //     companyName: "Google",
    //     datePosted: "2 days ago",
    //     position: "Machine Learning Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$190k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/apple.com",
    //     companyName: "Apple",
    //     datePosted: "3 weeks ago",
    //     position: "Security Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$170k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/amazon.com",
    //     companyName: "Amazon",
    //     datePosted: "1 day ago",
    //     position: "DevOps Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$140/hr",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/meta.com",
    //     companyName: "Meta",
    //     datePosted: "1 week ago",
    //     position: "Product Designer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$155k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/netflix.com",
    //     companyName: "Netflix",
    //     datePosted: "5 days ago",
    //     position: "Data Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$200k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/microsoft.com",
    //     companyName: "Microsoft",
    //     datePosted: "2 weeks ago",
    //     position: "AI Research Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$185k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/google.com",
    //     companyName: "Google",
    //     datePosted: "4 weeks ago",
    //     position: "Technical Program Manager",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$175k/year",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/apple.com",
    //     companyName: "Apple",
    //     datePosted: "6 days ago",
    //     position: "AR/VR Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$160/hr",
    //     location: "Mumbai, India"
    //   },
    //   {
    //     brandLogo: "https://logo.clearbit.com/amazon.com",
    //     companyName: "Amazon",
    //     datePosted: "3 days ago",
    //     position: "Business Intelligence Engineer",
    //     tag1: "Full Time",
    //     tag2: "Senior Level",
    //     pay: "$150k/year",
    //     location: "Mumbai, India"
    //   }
    // ];