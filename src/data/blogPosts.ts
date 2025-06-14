// import { BlogPost } from '../types/blog';

// export const blogPosts: BlogPost[] = [
//   {
//     id: '1',
//     title: 'The Future of Web Development in 2025 with AI',
//     excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
//     content: `
//       <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. In 2025, we're seeing a convergence of several key trends that are reshaping how developers approach building for the web.</p>
      
//       <p>First, the rise of AI-assisted development tools has dramatically changed the development workflow. Developers now rely on sophisticated code generation, automated testing, and intelligent debugging tools that significantly reduce development time and improve code quality.</p>
      
//       <p>WebAssembly has matured into a mainstream technology, enabling high-performance applications that were previously impossible in the browser. This has blurred the line between web and native applications, with many developers choosing the web as their primary platform for application delivery.</p>
      
//       <p>Another significant trend is the adoption of edge computing for web applications. By running code closer to users, developers can create experiences with near-instant load times and improved reliability, even in areas with poor connectivity.</p>
      
//       <p>Design systems and component libraries have become more sophisticated, with a focus on accessibility and performance. This has led to more consistent, inclusive web experiences across devices and platforms.</p>
      
//       <p>As we look to the future, the web platform continues to grow in capability and importance, cementing its position as the most accessible and versatile platform for software delivery.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Yug Atre',
//     date: 'April 15, 2025',
//     category: 'Technology'
//   },
//   {
//     id: '2',
//     title: 'Sustainable Design Practices for Digital Products',
//     excerpt: 'How environmentally conscious design decisions can make a difference in the digital world.',
//     content: `
//       <p>Sustainability isn't just for physical products anymore—it's becoming an essential consideration in digital design as well. As our digital footprint grows, so does its environmental impact, from the energy consumed by data centers to the resources required to manufacture the devices we use.</p>
      
//       <p>Sustainable digital design starts with efficiency. Optimizing websites and applications to use less processing power and bandwidth doesn't just improve performance—it reduces energy consumption. This means compressing images, minimizing JavaScript, and implementing lazy loading for content that isn't immediately visible.</p>
      
//       <p>Color choices can also impact energy usage, particularly on devices with OLED screens. Dark mode isn't just a user preference—it can significantly reduce battery consumption on these devices, extending their lifespan and reducing electronic waste.</p>
      
//       <p>Perhaps the most impactful aspect of sustainable digital design is longevity. Creating products that remain functional and relevant for longer reduces the need for constant updates and replacements. This means designing with future compatibility in mind and avoiding trendy design elements that quickly become dated.</p>
      
//       <p>Accessibility and sustainability go hand in hand. Many practices that make digital products more accessible—like providing text alternatives for images, ensuring sufficient color contrast, and creating keyboard-navigable interfaces—also reduce resource usage and make products more resilient across devices.</p>
      
//       <p>By incorporating these principles into our design process, we can create digital products that not only serve users effectively but do so with minimal environmental impact.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/3593923/pexels-photo-3593923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Vansh Hinduja',
//     date: 'April 10, 2025',
//     category: 'Design'
//   },
//   {
//     id: '3',
//     title: 'The Rise of Micro-Interactions in User Experience',
//     excerpt: 'Small animations that make a big difference in how users perceive and interact with digital products.',
//     content: `
//       <p>Micro-interactions are the small, subtle animations and feedback mechanisms that guide users through a digital experience. Though often overlooked, these tiny details can dramatically improve usability, provide important feedback, and add personality to an interface.</p>
      
//       <p>Effective micro-interactions serve clear purposes: they acknowledge user actions, provide immediate feedback, guide attention, and communicate system status. For example, a button that subtly changes color when hovered and displays a gentle ripple effect when clicked provides users with clear feedback that their action has been registered.</p>
      
//       <p>The best micro-interactions feel natural and intuitive, enhancing the user experience without calling attention to themselves. They should be consistent with the overall design language of the product and respond quickly to user input to maintain the feeling of direct manipulation.</p>
      
//       <p>When designing micro-interactions, timing is crucial. Animations that are too slow can frustrate users, while those that are too quick might go unnoticed. Most effective micro-interactions last between 200-500 milliseconds—just long enough to be perceived without causing delay.</p>
      
//       <p>From a technical perspective, modern CSS and JavaScript make implementing sophisticated micro-interactions more accessible than ever. Properties like transform and opacity are highly performant, allowing for smooth animations even on less powerful devices.</p>
      
//       <p>As devices continue to support more diverse input methods—from touch and mouse to voice and gesture—thoughtfully designed micro-interactions will become even more important in creating intuitive, responsive interfaces that delight users while improving usability.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Maria Rangwala',
//     date: 'April 5, 2025',
//     category: 'Design'
//   },
//   {
//     id: '4',
//     title: 'Building Resilient Systems with Modern Architecture',
//     excerpt: 'How distributed systems and microservices are changing the way we think about reliability.',
//     content: `
//       <p>In today's digital landscape, building systems that can withstand failures, scale to meet demand, and adapt to changing requirements is more important than ever. Modern architecture patterns have evolved to address these challenges, with approaches like microservices, serverless computing, and edge deployment becoming increasingly common.</p>
      
//       <p>The shift from monolithic applications to microservices has fundamentally changed how we think about system design. By breaking applications into smaller, independently deployable services, teams can develop, test, and deploy changes more rapidly and with less risk. This approach also enables more granular scaling, allowing organizations to allocate resources more efficiently.</p>
      
//       <p>Resilience in distributed systems comes not from preventing failures—which are inevitable—but from designing systems that can detect and recover from them gracefully. Techniques like circuit breakers, retries with exponential backoff, and fallback mechanisms help services degrade gracefully when dependencies fail.</p>
      
//       <p>Observability has emerged as a critical capability for modern systems. By instrumenting applications with metrics, logs, and traces, teams can gain visibility into complex distributed systems, identify performance bottlenecks, and diagnose issues more effectively.</p>
      
//       <p>Automation plays a key role in building resilient systems, from infrastructure provisioning and configuration management to continuous integration and deployment pipelines. By reducing manual intervention, automation not only improves efficiency but also reduces the likelihood of human error.</p>
      
//       <p>As systems continue to grow in complexity, the principles of resilient architecture—designing for failure, embracing redundancy, and prioritizing observability—will only become more important for building reliable digital experiences.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Mudit Thakre',
//     date: 'March 30, 2025',
//     category: 'Engineering'
//   },
//   {
//     id: '5',
//     title: 'The Psychology of Color in Digital Interfaces',
//     excerpt: 'Understanding how color choices impact user perception, emotion, and behavior.',
//     content: `
//       <p>Color is one of the most powerful tools in a designer's toolkit, capable of influencing user perception, evoking emotions, and guiding behavior. In digital interfaces, strategic use of color can improve usability, strengthen brand identity, and create memorable experiences.</p>
      
//       <p>The psychological impact of color is both universal and culturally specific. While certain color associations appear to be rooted in our biological response—like the alerting effect of red or the calming influence of blue—others are shaped by cultural context and personal experience. This complexity makes color selection a nuanced aspect of interface design that requires thoughtful consideration.</p>
      
//       <p>In practice, effective color use in interfaces balances aesthetic appeal with functional clarity. Color can be used to establish visual hierarchy, group related elements, indicate state changes, and provide feedback on user actions. When used consistently, these patterns become part of the interface language, helping users navigate and interact more intuitively.</p>
      
//       <p>Accessibility must be a primary consideration in color selection. Approximately 8% of men and 0.5% of women experience some form of color vision deficiency, most commonly difficulty distinguishing between red and green. Ensuring sufficient contrast between text and background colors and never relying solely on color to convey important information are essential practices for creating inclusive interfaces.</p>
      
//       <p>The context in which an interface will be used also influences color decisions. Environmental factors like lighting conditions, screen quality, and usage duration can all impact how colors are perceived. Interfaces designed for extended use often benefit from more subdued palettes that reduce eye strain.</p>
      
//       <p>As we gain a deeper understanding of color psychology and its application in digital environments, designers can make more informed choices that enhance both the emotional impact and functional effectiveness of their interfaces.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/1038001/pexels-photo-1038001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Ratan Tiwari',
//     date: 'March 25, 2025',
//     category: 'Design'
//   },
//   {
//     id: '6',
//     title: 'Ethical Considerations in Artificial Intelligence',
//     excerpt: 'Navigating the complex ethical landscape of AI development and implementation.',
//     content: `
//       <p>As artificial intelligence becomes increasingly integrated into our digital tools and services, the ethical implications of these technologies demand careful consideration. From algorithmic bias to privacy concerns, the development and deployment of AI systems raise complex questions that technologists must address.</p>
      
//       <p>One of the most pressing concerns is algorithmic bias. AI systems learn from historical data, which often reflects existing societal biases. Without careful oversight, these systems can perpetuate and even amplify these biases, leading to discriminatory outcomes in areas like hiring, lending, and criminal justice.</p>
      
//       <p>Transparency and explainability present another significant challenge. Many modern AI systems, particularly deep learning models, operate as "black boxes," making decisions through processes that are difficult to interpret. This lack of transparency raises concerns about accountability and makes it challenging to identify and address potential issues.</p>
      
//       <p>Privacy considerations are also paramount in AI development. Many AI systems rely on vast amounts of personal data to function effectively, raising questions about consent, data ownership, and the potential for surveillance. Balancing the benefits of data-driven AI with individual privacy rights requires thoughtful approaches to data collection, storage, and processing.</p>
      
//       <p>The impact of AI on employment and economic equality is another area of ethical concern. While AI has the potential to increase productivity and create new opportunities, it may also automate jobs and exacerbate economic inequality if the benefits are not widely shared.</p>
      
//       <p>Addressing these ethical challenges requires a multidisciplinary approach that brings together technologists, ethicists, policymakers, and representatives from affected communities. By prioritizing ethical considerations throughout the AI development lifecycle, we can work toward creating AI systems that are fair, transparent, and beneficial for all.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Sarthak Doshi',
//     date: 'March 20, 2025',
//     category: 'Technology'
//   },
//   {
//     id: '7',
//     title: 'The Evolution of Mobile-First Design',
//     excerpt: 'How mobile-first design principles are shaping the future of digital experiences.',
//     content: `
//       <p>Mobile-first design has evolved from a trend to a fundamental approach in creating digital experiences. As mobile devices continue to dominate internet usage, designers and developers must prioritize mobile experiences while ensuring seamless transitions across all device sizes.</p>
      
//       <p>The shift to mobile-first design has forced us to rethink traditional design patterns and user flows. Navigation menus have transformed from expansive horizontal bars to compact hamburger menus, and touch targets have grown larger to accommodate finger interactions rather than precise mouse clicks.</p>
      
//       <p>Performance optimization has become more critical than ever. Mobile users expect fast loading times and smooth interactions, even on slower network connections. This has led to innovations in image optimization, code splitting, and progressive loading techniques.</p>
      
//       <p>Mobile-first design also emphasizes content hierarchy and readability. With limited screen real estate, every element must serve a purpose and contribute to the user's journey. This has led to cleaner, more focused interfaces that prioritize essential content and actions.</p>
      
//       <p>As we look to the future, mobile-first design will continue to evolve with new technologies like foldable screens, AR/VR interfaces, and voice interactions. The challenge for designers will be to create experiences that are not just responsive, but truly adaptive to the unique capabilities of each device.</p>
      
//       <p>The success of mobile-first design lies in its ability to create better experiences for all users, regardless of their device. By starting with mobile constraints, we often discover more elegant solutions that work well across all platforms.</p>
//     `,
//     imageUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     author: 'Nitya Maheshwari',
//     date: 'March 15, 2025',
//     category: 'Design'
//   }
// ];



import { useEffect, useState } from 'react';
import { BlogPost } from '../types/blog';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/public/blogs');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};