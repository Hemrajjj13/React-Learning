  import React from 'react'
  import Card from './components/Card'

  const App = () => {
    const jobOpenings = [
      {
        brandLogo: "https://i.pinimg.com/1200x/38/59/0d/38590d870b00164d5c04d3c24290c400.jpg",
        companyName: "Google",
        datePosted: "5 days ago",
        position: "Senior Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$180k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
        companyName: "Apple",
        datePosted: "1 week ago",
        position: "iOS Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$160k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
        companyName: "Amazon",
        datePosted: "3 days ago",
        position: "Cloud Architect",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$170k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
        companyName: "Meta",
        datePosted: "2 weeks ago",
        position: "Frontend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$150/hr",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
        companyName: "Netflix",
        datePosted: "6 days ago",
        position: "Senior UI Engineer",
        tag1: "Contract",
        tag2: "Senior Level",
        pay: "$180/hr",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
        companyName: "Microsoft",
        datePosted: "4 days ago",
        position: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$165k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/38/59/0d/38590d870b00164d5c04d3c24290c400.jpg",
        companyName: "Google",
        datePosted: "2 days ago",
        position: "Machine Learning Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$190k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
        companyName: "Apple",
        datePosted: "3 weeks ago",
        position: "Security Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$170k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
        companyName: "Amazon",
        datePosted: "1 day ago",
        position: "DevOps Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$140/hr",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
        companyName: "Meta",
        datePosted: "1 week ago",
        position: "Product Designer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$155k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
        companyName: "Netflix",
        datePosted: "5 days ago",
        position: "Data Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$200k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
        companyName: "Microsoft",
        datePosted: "2 weeks ago",
        position: "AI Research Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$185k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/38/59/0d/38590d870b00164d5c04d3c24290c400.jpg",
        companyName: "Google",
        datePosted: "4 weeks ago",
        position: "Technical Program Manager",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$175k/year",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
        companyName: "Apple",
        datePosted: "6 days ago",
        position: "AR/VR Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$160/hr",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
        companyName: "Amazon",
        datePosted: "3 days ago",
        position: "Business Intelligence Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$150k/year",
        location: "Mumbai, India"
      }
    ];
    console.log(jobOpenings)

    return (
      <div className='parent'>
        {jobOpenings.map((job, index) => (
          <Card
            key={index}
            imgSrc={job.brandLogo}
            company={job.companyName}
            date={job.datePosted}
            position={job.position}
            tag1={job.tag1}
            tag2={job.tag2}
            pay={job.pay}
            location={job.location}
          />
        ))}
      </div>
    )
  }


  export default App