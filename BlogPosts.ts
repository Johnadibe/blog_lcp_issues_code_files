import { DISCORD_URL, AI_INTERVIEW_SELECTION_PAGE_PATH, LEARNING_PAGE_PATH, CRASH_COURSE_PAGE_PATH,
    DIAGNOSTIC_ASSESSMENT_URL_NETWORKS_1,
    DIAGNOSTIC_ASSESSMENT_URL_NETWORKS_2,
    DIAGNOSTIC_ASSESSMENT_URL_OPERATING_SYSTEMS_1,
    DIAGNOSTIC_ASSESSMENT_URL_OPERATING_SYSTEMS_2, } from '../utils/Constants';
import LeetCodeGrindingScoreImg from './img/leetcodeGrindingScore.png'
import NorthKoreanSoldierCoding from './img/NorthKoreanProgrammer.jpg'

enum BlogCategory {
    InterviewTips = 'InterviewTips',
    LearningTips = 'LearningTips',
    AlgorithmsAndDataStructures = 'AlgorithmsAndDataStructures',
    PerformanceOptimisation = 'PerformanceOptimisation',
    NutritionAndHealth = 'NutritionAndHealth',
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string; // a slug is a URL-friendly version of the title, doing this for SEO purposes
    category: BlogCategory;
    bgColor: string; // background color for the div
    content: string; // content of the blog post
    titleColor?: string; // font color for the div
    bgImageUrl?: string; // background image for the div
}

const TOOLS_TO_PREPARE_TEXT = `
<h2>Tools to Help You Prepare</h2>
<p><strong>Diagnostic Tests</strong>: Start your preparation by identifying your strengths and weaknesses with our comprehensive <a href=${LEARNING_PAGE_PATH} target="_blank" rel="noopener noreferrer">Diagnostic Tests</a>. These tests are designed to quickly highlight your strengths and weaknesses in data structures and algorithms, helping you focus your preparation on areas that need improvement.</p>
<p><strong>Crash Courses</strong>: If you need an accelerated learning path, consider our <a href=${CRASH_COURSE_PAGE_PATH} target="_blank" rel="noopener noreferrer">Crash Courses</a>. Covering data structures, algorithms, system design, and interviewing techniques, our courses are tailored to get you interview-ready faster than traditional methods.</p>
<p><strong>Mock Interviews</strong>: Engage in realistic interviews, tailored to specific company interview conditions, with professional interviewers from Coditioning. These sessions provide actionable feedback, a hire or no-hire decision, and coaching in real-time to address any observed weaknesses. <a href=${LEARNING_PAGE_PATH} target="_blank" rel="noopener noreferrer">Learn more and schedule</a>. Sessions are conducted by experienced senior software engineers who have successfully coached candidates to secure offers at FAANG and other top tech companies.</p>
<p><strong>AI Mock Interviews</strong>: To supplement your human mock interviews, you can also practice with our AI mock interviews. These are company-specific interviews and general interviews that are designed to simulate the real interview experience. You can practice as many times as you want and get instant feedback on your performance. <a href="${AI_INTERVIEW_SELECTION_PAGE_PATH}" target="_blank" rel="noopener noreferrer">Learn more and start practicing</a>.</p>
<p><strong>Real-Time Coaching</strong>: We also offer 1-1 coaching; our coaches can help with anything from personalized advice, watching you solve problems, and giving you real-time feedback and tips or techniques to improve your interview performance. <a href=${LEARNING_PAGE_PATH} target="_blank" rel="noopener noreferrer">Learn more</a>.</p>
`

export const blogPostsHashMap: { [id: number]: BlogPost } = { // a hash map of blog posts
    0: {
        id: 0,
        title: `"Just Grind LeetCode!" | Here's what this strategy is missing`,
        slug: 'why-just-grinding-leetcode-is-not-enough-for-swe-interviews',
        category: BlogCategory.InterviewTips,
        bgColor: '#3498db',
        content: `
        <div className="blog-post">
            <figure class="blog-thumbnail-image"><img src=${LeetCodeGrindingScoreImg} alt="A graphical representation of a LeetCode grinding score to highlight the importance of a balanced preparation strategy." loading="lazy"/></figure>
            
            
            <p><br><strong>TL;DR:</strong> Relying solely on the 'Just grind LeetCode' mantra for acing tech interviews might not be as effective as you'd imagine. Real interviews demand skills like context-switching, time-management, writing code under pressure, explaining your approach, and solving non-algorithmic problems, all without a solution manual at your disposal. Imagine learning to juggle with just a single ball, then finding yourself in a high-stakes circus act, juggling eight different objects of varying weights and shapes. That's the difference between grinding LeetCode and doing real interviews. More realistic preparation could make a world of difference. Intrigued? Read on to learn more, and discover a <a href=${AI_INTERVIEW_SELECTION_PAGE_PATH} target="_blank" rel="noopener noreferrer">new AI-powered platform</a> that can elevate your interview skills to the next level.</p>
            
            
            <h2><strong>Bob's Tale: The Journey from LeetCode Warrior to Interview Novice</strong></h2>
            
            
            <p>Have you ever heard of Bob's tale? Perhaps you know Bob, or maybe you are Bob. Bob is on a quest for a lucrative tech role, ideally with a prestigious FAANG company or a big hedge fund. His dream job pays handsomely, and he'd do anything to land it. Everywhere he turns, the advice is the same: "Just grind LeetCode."</p>
            
            
            <p>Bob dives headfirst into this regimen, spending months on intense LeetCode sessions, sometimes forsaking aspects of his social life. "It's worth it," he muses, envisioning a future with a plush salary. A few months later, after solving hundreds of problems, earning all the badges, and climbing the contest rankings, Bob gets a handful of interview invitations from impressive companies (FAANG, hedge funds, investment banks, etc.). He aces the take-home assessments (they're not too different from his grinding sessions except for the stricter time pressure), but stumbles when he reaches the live coding rounds.</p>
            
            
            <p>In the first interview, despite knowing the answer to the graph algorithm problem (a fusion of binary search and cycle detection), the context-switching between coding and answering interviewers' questions throws him off. <strong>He can't handle thinking, coding, and responding to both interviewers simultaneously</strong>. Furthermore, the second interviewer keeps giving him a look, as if he's making a mistake. Doubt creeps in. "Am I doing something wrong?" This mental juggling leads to mistakes.</p>
            
            
            <p>Shaking off the first setback, Bob heads to the next interview, where he is not allowed to run his code. "But I need to run my tests to know if I'm correct," Bob thinks. However, they want him to write code that compiles without running the code. Bob has a minor division-by-zero error in his code, an oversight due to the pressure of writing perfect code the first time under the watchful eyes of two interviewers. "These hedge fund folks are on another level," Bob thinks to himself.</p>
            
            
            <p>By the third interview, Bob feels prepared. He sails through the first round of algorithms and C++ questions but trips up during a code review session. Having never practiced spotting errors in others' code, he misses a critical issue and struggles to read other people's code. "Reading other people's code is different from writing code". He gets sent home early and doesn't make it to the final round.</p>
            
            
            <p>In one interview, he froze. In another, the interviewer kept rushing him as he coded. In yet another, he couldn't understand the interviewer's accent and was too polite to say so, making him appear clueless. However, Bob eventually got used to the rhythm of real interviews and landed a job, although not his dream job, as he had already missed those opportunities.</p>
            
            
            <h2><strong>The Neuroscience of Practice: Why Did Bob Struggle?</strong></h2>
            
            
            <p>The gap between Bob's LeetCode practice and his real interview performance illustrates a common pitfall in tech interview preparation. Neuroscience explains this: practicing a task helps our brain form new neural pathways for efficiency. But when the context changes, performance can take a hit<sup>1</sup>. Bob's brain had to adapt to new demands - explaining his code, spotting bugs, managing time, and switching contexts.</p>
            
            
            <h2><strong>LeetCode vs. Real-World Interviews: The Juggling Analogy</strong></h2>
            
            
            <p>Now picture technical interviews as a complex juggling act. You need to know your tools, understand how to maintain balance, handle multiple tasks at once, and, of course, know how to recover when an unexpected item is thrown into the mix. Practicing with just a single ball will not prepare you for the unpredictable demands of a live performance. This is the flaw in the "Just grind LeetCode" mantra. It's akin to preparing for a complex juggling act with just a single ball. It simply doesn't prepare you for the full spectrum of challenges you'll encounter in real interviews.</p>
            
            
            <h2><strong>Bridging the Practice-Reality Gap</strong></h2>
            
            
            <p>How can you overcome this gap? The key lies in context-dependent memory: our brains are better at recalling information when the learning and retrieval contexts match. The more your practice simulates real interviews, the better you'll perform when it counts. This is where Coditioning comes in.</p>
            
            
            <p><a href=${AI_INTERVIEW_SELECTION_PAGE_PATH} target="_blank" rel="noopener noreferrer">Coditioning offers a platform where you can practice under conditions that mirror real interviews</a>. It expands your preparation beyond LeetCode's confines, helping you tackle a broad range of problems, explain your solutions under pressure, and code without running your program. By the time you get to your first interview, you'll be truly ready, and you can avoid wasting opportunities at your dream job – opportunities that you may never get again. Remember, practice makes perfect, but only when done under realistic conditions.</p>
            
            
            <p>1<a href="https://app.nova.edu/toolbox/instructionalproducts/edd8124/fall11/1975GoddenBaddeley.pdf" target="_blank" rel="noopener noreferrer"> Context-Dependent Memory in Two Natural Environments: On Land and Underwater" by Godden &amp; Baddeley (1975): This is a classic study in the field of context-dependent memory. It illustrates how recall can significantly improve when the environment for learning matches that of retrieval.</a></p>
        </div>
        `
    },
    1: {
        id: 1,
        title: `Tired of Coding Mistakes? Use this Simple Technique`,
        slug: 'tired-of-swe-coding-interview-bugs-use-this-simple-technique',
        category: BlogCategory.InterviewTips,
        bgColor: '#c8a575',
        content: `
        <div className="blog-post">
            <figure class="blog-thumbnail-image"><img src=${NorthKoreanSoldierCoding} alt="A North Korean soldier coding on a laptop, symbolizing focused and disciplined preparation." loading="lazy"/></figure>
            
            <p><strong>TL;DR</strong>: One major source of coding errors during interviews stems from candidates trying to construct and code an entire algorithm at once, under pressure. To avoid this, use the <strong>chunking and incremental coding</strong> method, which involves breaking the problem down into smaller, manageable parts. Implementing the solution incrementally, chunk by chunk, reduces the likelihood of errors. An added bonus of this approach is the simplicity it brings to explaining your code as your skeleton code becomes an outline answering the inevitable "explain your code" question. Practice this method under realistic conditions with platforms like <a href=${AI_INTERVIEW_SELECTION_PAGE_PATH} target="_blank" rel="noopener noreferrer">Coditioning</a>, to ensure you're prepared for your next coding interview<br><br><br><strong>The Chunking and Incremental Coding Technique</strong></p>
            
            <p>Ever been stalled by mistakes or bugs during a coding interview? Perhaps you wrote your code, and had 5 minutes to go, only to run tests and discover a bug exists but you don't have enough time to find it, let alone fix it? Many candidates, under the combined stress of time-pressure and interviewer scrutiny, often attempt to formulate and write out a whole algorithm, in one go. If the algorithm challenge is simple enough, then this could work, but probably not the best idea for the types of challenges you'll encounter in real interviews. </p>
            
            <p>Our short-term memory is rather limited, and can hold only so many elements for a short period, approximately 15 to 30 seconds. (There's exceptions to this e.g. Hyperthymestic individuals, who make up less than 1% of the population).</p>
            
            <p>For the majority of us, there's a strategy that can greatly reduce coding errors  - <strong>chunking and incremental coding</strong>. It's a simple yet effective approach to handle complex problems under pressure. Remember interviews conditions, with their time-constraints and interviewers breathing down your neck, are pressure-cookers. Mistakes flourish under these conditions.</p>
            
            <h2 class="wp-block-heading">The Power of Chunking and Incremental Coding</h2>
            
            <p>The approach is simple, divide the problem into manageable 'chunks' before jumping into the code. This way, each chunk represents a logical segment of the solution, which can be tackled independently, reducing the likelihood of errors.</p>
            
            <p><strong>Let's walk through this method with a programming challenge: </strong><em>given a list of objects, each representing a stock and its Year-To-Date (YTD) gain, identify the top 'k' stocks with the highest YTD gain</em>. Where k is a positive integer.</p>
            
            <p>Intuitively, what we will be doing is essentially eliminating any object for which 'k' objects have a larger YTD gain. To be in the top 'k', a stock cannot have 'k' stocks outperforming it. Picture yourself on a leaderboard, to be in the top 'k' positions, there can't be 'k' competitors with better scores than you.</p>
            
            <!-- wp:heading -->
            <h2 class="wp-block-heading">A Step-by-Step Guide to Chunking and Incremental Coding</h2>
            <!-- /wp:heading -->
            
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">1) <strong>Preliminary Thinking</strong></h3>
            <!-- /wp:heading -->
            
            <p>Spend 5 to 10 minutes deciding which solution you will be implementing, make sure your algorithm is correct (run through it with test cases, cover all corner cases!). Once you've figured out a solution, commit to it, and now just focus on implementing correctly.</p>
            
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">2) <strong>Skeleton Code</strong></h3>
            <!-- /wp:heading -->
            
            <p>Here's how skeleton pseudocode for our challenge might look:</p>
            
            <!-- wp:image {"id":56,"sizeSlug":"large","linkDestination":"none"} -->
            <figure class="wp-block-image size-large"><img src="https://coditioning3.files.wordpress.com/2023/06/image.png?w=714" alt="An example of skeleton pseudocode outlining the initial structure for solving a programming challenge." loading="lazy" class="wp-image-56" /></figure>
            <!-- /wp:image -->
            
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">3) <strong>Incremental Implementation</strong>:</h3>
            <!-- /wp:heading -->
            
            <p>Fill in the logic within each section of your skeleton code, one chunk at a time.</p>
            
            <!-- wp:image {"id":57,"sizeSlug":"large","linkDestination":"none"} -->
            <figure class="wp-block-image size-large"><img src="https://coditioning3.files.wordpress.com/2023/06/image-1.png?w=705" alt="A visual representation of the first step in the incremental implementation process, showing partial logic integration." loading="lazy" class="wp-image-57" /></figure>
            <!-- /wp:image -->
            
            <!-- wp:image {"id":58,"sizeSlug":"large","linkDestination":"none"} -->
            <figure class="wp-block-image size-large"><img src="https://coditioning3.files.wordpress.com/2023/06/image-2.png?w=705" alt="An example of further progress in the incremental implementation process, demonstrating additional logic being added to the skeleton code." loading="lazy" class="wp-image-58" /></figure>
            <!-- /wp:image -->
            
            <p>eventually you'll have something like this</p>
            
            <!-- wp:image {"id":60,"sizeSlug":"large","linkDestination":"none"} -->
            <figure class="wp-block-image size-large"><img src="https://coditioning3.files.wordpress.com/2023/06/image-3.png?w=705" alt="The final implementation of a complete coding solution following the skeleton code and incremental implementation steps." loading="lazy" class="wp-image-60" /></figure>
            <!-- /wp:image -->
            
            <!-- wp:heading {"level":3} -->
            <h3 class="wp-block-heading">4) Testing </h3>
            <!-- /wp:heading -->
            
            <p>Before submitting your code, write out test cases and mentally walk through the algorithm with sample input to check the output, or run the tests. I'd recommend mentally walking through before running your tests if you have time. It always looks better if your code passes all the tests <strong>the first time round</strong>.</p>
            
            <p><strong>Wait! There's more</strong></p>
            
            <p>An added bonus of this chunking approach is the simplicity it brings to explaining your code. <strong>Your skeleton code becomes a detailed outline for your explanation</strong>, ensuring a smooth and coherent presentation of your solution, <strong>free from memory lapses</strong>.</p>
            
            <p>This strategy, with consistent practice, will become second nature and you'll find yourself writing error-free code even under high-pressure scenarios.</p>
            
            <p>Practice using this approach under interview-conditions to get a feel of this method. You can do mock interviews with an AI-interviewer on <a href=${AI_INTERVIEW_SELECTION_PAGE_PATH} target="_blank" rel="noopener noreferrer">Coditioning</a>. The <a href=${AI_INTERVIEW_SELECTION_PAGE_PATH} target="_blank" rel="noopener noreferrer">Coditioning</a> platform allows you to simulate realistic interview conditions, so you can identify all your weakness now and not when it could cost you your dream job.It also allows you to try out a broad range of problems (not just algorithm-style, there's code reviews, spot the bug etc), explain your solutions under time-pressure etc.</p>
            
            <p>But don't stop there, why not join our community on <a href=${DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord</a>? We share strategies, discuss, and learn from each other to optimize our coding and interview performance. Dive in and give yourself an edge. Happy coding!</p>
        </div>
        `
    },
    2: {
        id: 2,
        title: `Prepare for these interview scenarios or it will cost you`,
        slug: 'prepare-for-these-interview-scenarios-or-it-will-cost-you',
        category: BlogCategory.InterviewTips,
        bgColor: '#ce4040',
        content: `
        <div className="blog-post">
            <p> Traditional interview preparation approaches (e.g. grinding code playlists), don't prepare you for the spectrum of challenges you'll encounter in real interviews e.g. not being able to run your code before submitting </p>    
            <p> In the video below, we discuss tricky interview scenarios that could throw you off and cost you your dream job. For example how do you handle being double-teamed by interviewers in an interrogation style interview? Tips for handling these scenarios and others are discussed. </p>
            <div style="display: flex; justify-content: center;">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/G5ZARnQyHKk?si=jqM7M0kqbi-D038b" title="Video discussing tips for handling challenging interview scenarios like double-team or interrogation-style interviews" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <p> Be sure to check out our full range of <a href="/"> interview preparation tools (AI-powered mock interviews, custom learning path etc) </a> to ensure you're truly prepared for your next interview. </p>
        </div>
        `,
    },
    3: {
        id: 3,
        title: `8 Tips for Optimizing Your Coding Interview Prep`,
        slug: '8-tips-for-optimizing-your-coding-interview-prep',
        category: BlogCategory.InterviewTips,
        bgColor: '#db5334',
        content: `
        <div className="blog-post">
  
        <h2>1. Beware of Autopilot (muscle memory)</h2>
        <ul>
          <li><strong>The Curse of Familiarity:</strong> Encountering a coding problem you've <em>coded up</em> before can trigger your muscle memory. This is particularly dangerous if the real problem you're facing has subtle differences. By the time you realize (if you do), you've probably wasted so much time, and might not be able to recover.</li>
          <li><strong>💡Tip:</strong> Might seem counterintuitive, but in the days leading up to interviews, shift your focus from coding out full solutions to mental revision or mental coding. The idea here is to focus on being able to solve, and not having coded solutions fresh in your memory. Obviously, if you try to code mentally and struggle, then definitely try to code out the relevant chunk of code.</li>
        </ul>
      
        <h2>2. Have an Objective Measure of Your Interview-Readiness</h2>
        <ul>
          <li><strong>Beyond Problem Counting:</strong> Completing a high volume of problems doesn’t guarantee readiness. Real-world readiness requires the ability to perform under interview conditions.</li>
          <li><strong>💡Tip:</strong> Engage in realistic mock interviews, ideally with experienced interviewers who can provide <strong>a hire/no-hire decision</strong>. A good rule of thumb is, if you do 10 realistic (throw-away) interviews or mock interviews of the standard for the role you're aiming for, getting hire decisions in 8 out of 10 is a good signal. The advantage of doing these with experienced interviewers versus, say, your classmate is they are better able to factor in the quality of candidates and the hiring bar of the current job market in their hiring decision.</li>
        </ul>
      
        <h2>3. Don't Burn Out - Be efficient</h2>
        <ul>
          <li><strong>Preserve Mental Stamina:</strong> Grinding for 3-4 hours daily, especially with a full-time job, is cognitively draining, and you may not realize the decline until you burn out. You want to keep yourself fresh for the interview, especially if you'll be having back-to-back interviews.</li>
          <li><strong>💡Tip:</strong> Say you want to solve 100 problems prior to your interview, they'll have some things in common like declaration of function interfaces, for loops, if-else ladders, etc. Once you know how to do these, there isn't much value in coding them out a 100 times. If you have to code, <strong>focus on the crux of the problem</strong>. You can lay out skeleton code solutions with comments, mentally visualize what you intend to implement but offload to AI (e.g., GitHub Copilot) to implement your intent, so you can verify your solution. The usual things like taking regular breaks, getting enough sleep, eating & hydrating also apply.</li>
        </ul>
      
        <h2>4. Context Preload</h2>
        <p>This is slightly similar to the above but more relevant to companies that repeat questions e.g., Meta. The idea here is to ensure you build a mental model for the context of their problems e.g., the <a href="https://leetcode.com/problems/asteroid-collision/" target="_blank" rel="noopener noreferrer">asteroid collision problem</a> is a common Meta problem. Having to think about the different combinations of asteroid directions and what this means for the next state is time-consuming and tricky to do under pressure in an interview, especially if first time. If you're already familiar with this, on the interview day you can just focus on understanding the variation, figuring out a solution & implementing correctly.</p>
      
        <h2>5. Time Allocation by Phase</h2>
        <p>When faced with a coding challenge, you can break down your actions into categories:</p>
        <ul>
          <li>Algorizing (evaluating different approaches)</li>
          <li>Verifying correctness</li>
          <li>Implementing</li>
          <li>Fixing bugs</li>
          <li>Communicating with the interviewer</li>
        </ul>
        <p>You should have a time-box for each of these e.g., for a challenge where you have 30 minutes, you can say 10 minutes for Algorizing and 5 minutes for the other phases. Make sure you practice working under these time constraints. This is just a baseline, to keep you on time, and of course, you can tweak; any time saved in one phase can be used in other phases. Usually, if you can come up with an optimal solution in 5 minutes or less, that's like 50% of the battle won.</p>
      
        <h2>6. One-Shot Mentality</h2>
        <p>When practicing, having 5+ submissions before having a solution that passes all test cases is suboptimal, and a painful way to learn. You need to form the habit of one-shot submission i.e., being confident that your solution is correct before hitting run/submit. You won't be able to do this when you're still in your learning phase, and your mentality should be more focused on learning rather than solving. If stuck for about 10 mins, or not confident, then treat the challenge as a learning exercise and plug the gaps. This technique is particularly important for companies that don't let you run your code (Jane Street, Meta etc)</p>
      
        <h2>7. Hungry Judge Effect</h2>
        <p>There's a well-known <a href="https://en.wikipedia.org/wiki/Hungry_judge_effect" target="_blank" rel="noopener noreferrer">study</a> that shows that judges are less harsh after they've had a meal, and the judges are not necessarily aware of this. An interviewer is essentially a judge, so it's probably a good idea to schedule interviews after lunchtime just in case. I'd say something like 2:30 pm is probably a good time slot.</p>
      
        <h2>8. Rescheduling</h2>
        <p>For highly competitive roles, such as those at FAANG, Quant firms where small mistakes are costly. If you feel unprepared, don't be afraid to reschedule. If you feel you have a 50% chance of passing, you're probably going to fail, better to reschedule, just make sure you give the recruiter advance notice.</p>
      
        <p>For more ways to optimize your interview prep and performance, check out these resources:</p>
        <ul>
          <li><a href="https://youtu.be/QSVrjXLyOVI" target="_blank" rel="noopener noreferrer">10 Interview Tricky Scenarios that will throw you off, and how to handle them</a></li>
          <li><a href="https://youtu.be/sLJ6p5rSnuo" target="_blank" rel="noopener noreferrer">An optimal 4-stage approach to getting interview-ready</a></li>
          <li><a href="https://youtu.be/25LGXTviDbk" target="_blank" rel="noopener noreferrer">This expands on some of the points above like Auto-pilot but in video form</a></li>
          <li><a href="https://youtu.be/7yQwfPUum3s" target="_blank" rel="noopener noreferrer">10 Techniques to adopt in live interviews</a> (this is focused on interviewing techniques)</li>
        </ul>
        
        <p><strong>P.S: Be sure to explore the coditioning site for tools that will optimise your interview performance, and check out our <a href=${DISCORD_URL} target="_blank" rel="noopener noreferrer"> Discord</a> community</p></strong>
      
        </div>
        `,
    },
    4: {
        id: 4,
        title: `Cracking The Meta Coding Interview`,
        slug: 'cracking-the-meta-coding-interview',
        category: BlogCategory.InterviewTips,
        bgColor: '#98dae6',
        content: `
        <div class="blog-post">
            <figure class="blog-thumbnail-image"><img src="https://coditioning3.files.wordpress.com/2024/04/acint_the_meta_interview.png" alt="An infographic summarizing strategies to crack the Meta coding interview." loading="lazy"/></figure>
            <h2>Introduction</h2>
            <p>You can expect one coding round at the phone screen stage, and at least 2 at the onsite rounds. These rounds can be one of the most challenging, and also one of the easiest among the major tech companies. It all depends on how you prepare and there's an element of luck too. They tend to recycle questions (with variations), so it can be a walk in the park, but the tight time constraints make it difficult to figure things out on the fly. This guide will equip you with everything you need to know/do to maximise your chances. Let's start with some quick things to note about Meta coding interviews:</p>
            <ul>
                <li><strong>Question Recycling:</strong> Meta often recycles interview questions, typically with variations, allowing candidates to potentially face familiar problems. <strong>This is both good and bad; more on this later.</strong></li>
                <li><strong>Tolerance for Bugs:</strong> While precision in coding is valued, Meta does not require perfect code and is known to be forgiving of minor bugs.</li>
                <li><strong>Time Constraints:</strong> Meta interviews are extremely time-constrained; there is a need for quick recall, thinking, and rapid problem-solving.</li>
                <li><strong>Hiring Bar:</strong> Given the competitive nature of these interviews, aim for a 'hire' decision in all rounds. In this market (2023/2024), we've seen candidates just miss out on an offer even after nailing 5 out of 6 coding questions.</li>
                <li><strong>Career Impact:</strong> Meta ranks among the highest paying tech employers, with significant opportunities for rapid advancement for top performers. The effort put into preparing for their interviews can lead to substantial long-term benefits.</li>
            </ul>

            <h2>Meta Interview Conditions</h2>
            <p>Preparing for a Meta coding interview requires a deep understanding of the unique conditions you'll face. Here’s what to keep in mind as you prepare:</p>
            <ul>
                <li><strong>No Code Execution:</strong> At Meta, you won’t have the opportunity to run your code during the interview. Being good at writing correct and optimal code, ideally on the first try, will improve your odds greatly.</li>
                <li><strong>Time Constraints:</strong> Each Meta coding interview typically includes two questions to be solved in 35 minutes—this means about 15-20 minutes per question, encompassing easy to medium difficulty levels. Effective time management is critical; you need to allocate enough time not only for coding but also for dry-running your code and engaging with the interviewer.</li>
                <li><strong>Mock Interviews:</strong> Meta provides an opportunity to participate in a mock interview with one of their interviewers. This can be scheduled through your career profile on their website. Failing this won't have any negative impact.</li>
                <li><strong>Flexible Scheduling:</strong> Meta's interview scheduling is highly flexible; reschedule if you aren't confident enough. The bar and competition are so high that you're better off rescheduling than going in not interview-ready. <strong>More on what it means to be interview-ready later.</strong></li>
                <li><strong>Question Patterns:</strong> Meta is known to repeat interview questions, albeit with variations. While this could give you an edge if you encounter familiar problems, beware of the autopilot trap—solving a remembered problem rather than the one actually presented, which can lead to critical mistakes that are difficult to recover from.</li>
                <li><strong>Interviewer Engagement:</strong> Effective communication with your interviewer is essential. You must demonstrate a clear understanding and articulation of your thought processes, coding decisions, runtime complexities, etc. Keeping the interviewer informed and engaged throughout your problem-solving process is key.</li>
                <li><strong>Initial Icebreaker:</strong> Although coding is the primary focus, interviews typically start with a brief discussion about your past experience. This serves as an icebreaker and a gentle entry into the more intense coding challenges.</li>
                <li><strong>Vague Questions:</strong> Unlike some online platforms, do not expect detailed questions with sample input and output. Be prepared to engage actively with your interviewer to clarify vague questions.</li>
                <li><strong>Dynamic Programming:</strong> While important to understand, dynamic programming questions are rarely emphasized in Meta interviews, so deprioritize these in your preparation. There's a rumor that they've banned questions on this topic.</li>
            </ul>

            <h2>Checklist of Essential Skills for Meta Interviews</h2>
            <p>To succeed in a Meta coding interview, it's crucial to excel in specific skills that align with their evaluation criteria: Communication, Problem Solving, Coding, and Verification. The below checklist outlines specific skills you should focus on during your preparation; if you're good at all of these, you're interview-ready:</p>
            <ul>
                <li><strong>Crafting Correct Solutions Quickly:</strong> You should be able to devise correct solutions within five minutes.</li>
                <li><strong>Crafting Optimal Solutions Quickly:</strong> Being correct isn't enough; you also need to be able to come up with optimal solutions fairly quickly. You most likely won't have time to implement a suboptimal solution and then optimize it if the optimal solution is radically different.</li>
                <li><strong>Avoiding Autopilot:</strong> You should be able to avoid the autopilot trap, where you solve a problem you remember rather than the one presented. You need to be good at sticking to the requirements of the problem.</li>
                <li><strong>Time Management:</strong> You should have a time allocation for different phases e.g., for a 15-minute challenge: 3 mins for solution crafting, 5 mins to implement, 5 mins to dry-run, and 2 mins to engage with the interviewer. (You can see that time is tight)</li>
                <li><strong>Writing Bug-Free Code Quickly:</strong> You need to be good at implementing your intended solution with little or no bugs.</li>
                <li><strong>Dry Running Code:</strong> Since you can’t execute your code, practice dry running your solutions mentally. This means using test cases to verify your code and ensure it works as intended. If you haven't practiced this, you will likely struggle, especially if you're used to running your code.</li>
                <li><strong>Context Switching:</strong> You should be comfortable switching between different cognitive tasks: from problem-solving and coding to engaging with the interviewer. This includes responding to hints, addressing questions that may seem tangential, and defending your decisions.</li>
                <li><strong>Confidence and Body Language:</strong> Even if you're correct, coming across as unsure won't inspire confidence in the interviewer. You should be able to defend your decisions confidently and maintain positive body language throughout the interview.</li>
            </ul>

            <p>If you are good at all of these and have practiced with Meta's questions, then you're interview-ready.</p>

            <h2>Recommended Preparation Strategies</h2>
            <h3>Step 1: Build a Strong Foundation</h3>
            <ul>
                <li><strong>Identify Weaknesses:</strong> Start by assessing your understanding of data structures and algorithms. Identify areas where you need improvement and ensure to plug any gaps.</li>
                <li>⚡ <em>If you prefer some hand-holding and want an accelerated learning path, you can try out our crash courses <a href=${CRASH_COURSE_PAGE_PATH} target="_blank" rel="noopener noreferrer">here</a>.</em></li>
                <li>💡 <em>You can also use our <a href=${LEARNING_PAGE_PATH} target="_blank" rel="noopener noreferrer">Diagnostic Tests</a> to evaluate your knowledge and identify areas for improvement.</em></li>
            </ul>

            <h3>Step 2: Context Pre-Loading and Mental Problem Solving</h3>
            <p>Mental Run-Throughs: Go through a list of common Meta problems (around 100-200). Instead of coding the solutions at first, you can first mentally solve them i.e. attempt to come up with an optimal solution and layout the code mentally. If you can do it mentally, then coding it up is just typing. The advantage of doing this mentally is that the cognitive load is lower, and you can get to a state where you're familiar with Meta's problems in a shorter time. If you're stuck after 10 mins, check the solution and understand it.</p>
            <ul>
                <li>Try to code up the solutions to some of the problems, especially the ones you weren't able to solve mentally.</li>
            </ul>

            <h3>Step 3: Practice Under Time Constraints</h3>
            <p>Timed Practice: Simulate the interview environment by practicing coding under time constraints—aim to solve two problems within 35 minutes.</p>
            <ul>
                <li>Implementation: Focus on implementing both familiar and unfamiliar problems within these time limits.</li>
            </ul>

            <h3>Step 4: Human-in-the-Loop Mock Interviews</h3>
            <p>Mock Interviews: Engage in multiple mock interviews. Use the free mock interview offered by Meta and consider additional sessions with professional interviewers who can give realistic hire decisions and feedback. You can also mock with your friends, but mocking with an interviewer is strongly advised.</p>
            <ul>
                <li>Success Rate: Aim for a success rate of at least 80% in these mock sessions, which indicates readiness. For instance, if you undertake ten mock interviews, and are getting a hire decision in 8 or more, that's a good signal of your readiness.</li>
            </ul>

            <h3>Step 5: Coding Quickly with Minimal Bugs</h3>
            <p>Speed and Accuracy: Practice thinking of solutions in a programmatic way, and translate your solutions into code while minimizing errors.</p>
            <ul>
                <li>Skeleton code & checklists: Develop a habit of writing skeleton code and using checklists to ensure you implement your intent and cover all requirements. Do not rely on your short-term memory. Under pressure, you're likely to forget things, and one omission can lead to a no-hire decision. For example, if the problem asks for descending order, and you do an ascending order, this can cost you the offer.</li>
            </ul>

            <h3>Step 6: Avoid Burnout</h3>
            <p>Sustainable Preparation: Ensure you don't compromise your health during preparation. Get adequate sleep, take regular breaks, and maintain a balanced diet. Exercise, get sunlight, etc. You need to be in peak condition during your interviews.</p>
            ${TOOLS_TO_PREPARE_TEXT}
        </div>
`
    },
    5: {
        id: 5,
        title: `Amazon SDE II Interview Tips (Aug 2024)`,
        slug: 'amazon-sde-II-interview-tips-insights',
        category: BlogCategory.InterviewTips,
        bgColor: '#c8a575',
        titleColor: "#36454F",
        content: `
        <div className="blog-post">
            <p>Over the past few months, I’ve conducted interviews with <strong>over 50 Amazon SDE II candidates</strong>, collecting detailed feedback from them post-interview-loop to stay updated on <strong>current trends & hiring bars</strong>. I've also successfully navigated the process myself in the past, and I want to share some valuable insights, as sometimes it is <strong>small things that end up making the difference</strong>.</p>
            <p>One alarming thing I've noticed is that <strong>some candidates are getting 5 Leadership Principle (LP) questions per round</strong>. This deviates from the typical 2-3 LP questions per round and has shocked some candidates. For those who encountered this in the first round, you can imagine how <strong>demoralizing</strong> it was. It's worth making sure you have enough stories to cover this <strong>worst-case scenario</strong>.</p>
            <p>Here are some other insights that will hopefully improve your interview performance:</p>
            <ul>
                <li>Don't let the LP questions <strong>eat into your coding or system design time</strong>. Several candidates have reported this as a <strong>major factor</strong> in their poor performance, e.g., rushing through system design requirements gathering and missing key details.</li>
                <ul>
                    <li>Interviewers may not strictly adhere to a <strong>30-30 split</strong> (30 minutes for LPs, 30 for technical).</li>
                    <li>Try to keep your LP answers <strong>succinct</strong> (rehearse and time yourself).</li>
                    <li>Make sure your response <strong>demonstrates the competency</strong> being sought. Candidates who give tangentially related stories only end up wasting their time, as the interviewer won't be satisfied and will keep probing.</li>
                </ul>
                <li>Some candidates have reported being annoyed with themselves for <strong>not taking hints</strong> given by the interviewer.</li>
                <ul>
                    <li>It seems like some candidates get <strong>tunnel-visioned</strong> and struggle to backtrack, pause, and reflect on how they can use the hint. This is something worth practicing.</li>
                </ul>
                <li>In system design, if you mention a technology you don't know much about, <strong>don't be surprised if they ask you about it</strong>. It doesn't look good if you can't answer, so don't dig yourself into a hole.</li>
                <li>Try to <strong>split your onsite rounds across multiple days</strong>.</li>
                <ul>
                    <li>Back-to-back rounds all on the same day increase the likelihood of <strong>fatigue and burnout</strong>.</li>
                </ul>
                <li>There is a Bar Raiser interviewer who can <strong>veto the hire/no-hire decision</strong>.</li>
                <ul>
                    <li>Their job is to help <strong>improve the quality of hires</strong>.</li>
                    <li>This round can be fully focused on LPs, or it could be <strong>system design + LPs, or coding + LPs</strong>.</li>
                    <li>One could argue this round <strong>has more weight</strong> than the others.</li>
                </ul>
                <li>Some rounds may have <strong>two interviewers present</strong>; don't let this put you off.</li>
                <li>For the coding rounds, here are the focus areas:</li>
                <ul>
                    <li><strong>Problem Solving</strong>: Could involve <strong>debugging code</strong> that doesn't compile or has bugs, rather than writing new code from scratch.</li>
                    <li><strong>Writing Logical and Maintainable Code</strong>: Naming conventions, object-oriented principles, evolvable interfaces, separation of concerns, etc.</li>
                    <ul>
                        <li>This will most likely still involve <strong>DSA (Data Structures and Algorithms)</strong>.</li>
                    </ul>
                    <li><strong>DSA</strong>: typically <strong>medium-level LeetCode difficulty</strong>.</li>
                </ul>
                <li>Practice <strong>dry running your code properly</strong>. There is a difference between <strong>verifying correctness</strong> against test cases and verifying if your code <strong>matches your intent</strong>.</li>
                <li><strong>Interviewers really take time</strong> to listen to your LP answers, and they <strong>dig deep</strong>. Fabricated stories will get exposed very quickly.</li>
            </ul>
            <p>I put together <a href="https://youtu.be/GDNmHiYK3Gk" target="_blank" rel="noopener noreferrer">this guide for cracking Amazon in 2024</a>; hope it helps!</p>

            <p>Best of luck from Nito (Coditioning Founder)</p>
        </div>
        `
    },
    6: {
        id: 6,
        title: `Google SWE Interview Tips & Insights (Aug 2024)`,
        slug: 'google-swe-interview-tips-insights',
        category: BlogCategory.InterviewTips,
        bgColor: '#fbbc06',
        content: `
        <div className="blog-post">
            <p>Over the past couple of months, I've conducted interviews with about 20 Google SWE candidates at various levels, collecting detailed feedback from them post-interview-loop to stay updated on <strong>current trends & hiring bars</strong>.</p>

            <p>Imagine having to do <strong>2 additional coding rounds after clearing team matching</strong> because the hiring committee needs more data points to make a decision. Seriously, getting through this process, beyond skill and luck, requires a lot of <em>mental resilience</em>.</p>

            <p>Overall, one thing that stands out is that it’s not always about coding the most optimal solution (though please strive for this). I've seen candidates who had coding rounds where they didn't need to code (this isn’t the norm!).</p>

            <p>Some mentioned they coded out a brute-force solution, figured out an optimal solution but couldn't finish coding it; however, because they were correct and explained their thought process well (for the optimal solution!), that was enough to get them through.</p>

            <p>I'll share a fairly effective tip for getting the interview (<strong>better than cold messaging</strong>) and the insights below, which will let you know what to expect and hopefully give you an edge:</p>

            <ul>
                <li>The Google interview process typically consists of:
                    <ul>
                        <li><strong>Recruiter call</strong></li>
                        <li><strong>Online Assessments</strong></li>
                        <li><strong>1-2 phone screens</strong></li>
                        <li><strong>Onsite</strong>
                            <ul>
                                <li>2-3 coding rounds</li>
                                <li>1 Googleyness round (Behavioral)</li>
                                <li>1 system design round (for L5+)</li>
                            </ul>
                        </li>
                        <li><strong>Team matching</strong></li>
                        <li>In some cases, the hiring committee may request additional coding rounds after team matching!</li>
                    </ul>
                </li>
                <li>Expect the <strong>process to take anywhere from 4 weeks to 6+ months</strong>, with longer timelines often due to the team matching phase.
                    <ul>
                        <li>Prepare mentally for this possibility.</li>
                    </ul>
                </li>
                <li>Coding rounds will likely involve:
                    <ul>
                        <li><strong>Graph (including Tree) and Dynamic Programming questions</strong> and other Data Structures and Algorithms topics.</li>
                        <li>Questions are typically <strong>LeetCode Medium to Hard</strong>.
                            <ul>
                                <li>If you encounter a seemingly easy question, clarify the problem statement to ensure you're not missing any details.</li>
                                <li>Be prepared for a follow-up question that will increase the difficulty.</li>
                                <li>Watch out for edge cases; some interviewers intentionally craft problems with loads of edge cases.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Practice coding in a <strong>Google Doc</strong>; this is very awkward without practice and can throw you off.</li>
                <li>Practice explaining your thought process on a Google Doc to another person.
                    <ul>
                        <li>In particular, be comfortable <strong>quickly</strong> representing the state of the various data structures in text form and showing their state transitions (this is useful when explaining certain algorithms).</li>
                    </ul>
                </li>
                <li>Practice dry-running your code properly. <strong>There is a difference between verifying correctness against test cases and verifying if your code matches your intent.</strong></li>
                <li>Ask the recruiter to schedule a mock interview with a Google Engineer; it's not guaranteed you’ll get one, but no points are lost for asking.</li>
                <li>Interviews often require <strong>cognitive flexibility</strong>, i.e., the ability to adapt to changing constraints.
                    <ul>
                        <li>If an interviewer modifies a constraint or introduces a new one, be prepared to:
                            <ul>
                                <li>Adjust your data structure choices.</li>
                                <li>Switch to a different algorithm altogether.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>In rare cases, you might encounter a coding round where you don't actually need to code.
                    <ul>
                        <li>The key challenge would be to figure out an optimal solution and explain your thought process.</li>
                        <li>Focus on clearly communicating your approach.</li>
                    </ul>
                </li>
                <li>Unlike some other companies, <strong>repeat questions are rare at Google</strong>.
                    <ul>
                        <li>Solving past Google questions with the expectation of seeing them again is not a recommended strategy.</li>
                        <li>Reviewing past questions can help you understand the types of questions they ask, though.</li>
                    </ul>
                </li>
                <li>The <strong>Googleyness round</strong> is an important aspect of the process.
                    <ul>
                        <li>Interviewers will dig deep into your answers.</li>
                        <li>Make sure to prepare authentic stories that demonstrate the competencies they're looking for.</li>
                    </ul>
                </li>
                <li><strong>Team matching can be a lengthy process</strong>.
                    <ul>
                        <li>Some candidates report up to 20 team-matching calls in extreme cases, with the process taking months.</li>
                        <li>Be patient and persistent.</li>
                        <li>Consider your options if the process becomes too drawn out. I've seen others take other offers while waiting for Big G to get back.</li>
                        <li>The hiring manager has to vouch for you and needs to write an SoS (Statement of Support). When you get to this round, you need to provide the hiring manager with enough information/signals to compel them to write a strong SoS. Also, some <strong>rapport-building</strong> will go a long way.</li>
                    </ul>
                </li>
                <li><strong>Down-leveling</strong> is a possibility.
                    <ul>
                        <li>You may be offered a position at a lower level than what you interviewed for, rather than an outright rejection.</li>
                    </ul>
                </li>
                <li>If you don't pass the interviews, there is a <strong>6-12 month cooldown period</strong> before you can interview again. I've seen people get in on the 4th attempt, so failing twice/thrice doesn't mean you're permanently banned from applying.</li>
            </ul>

            <p><em>Another way to get a referral</em><br>
            I've seen a non-insignificant number of people get referrals <strong>without knowing someone that works there</strong>, simply by tagging along with people who are in the interview process, who then shared their details with the recruiter they were working with.</p>

            <p>Best of luck,<br>
            Nito (Founder, Coditioning)</p>
        </div>
        `
    },
    7: {
        id: 7,
        title: `Meta Production Engineer Interview Guide`,
        slug: 'meta-production-engineer-interview-guide',
        category: BlogCategory.InterviewTips,
        bgColor: '#3498db',
        content: `
        <div className="blog-post">
            <p>Preparing for a <strong>Meta Production Engineer interview</strong>? This guide covers everything you need to know, from the interview stages and the type of <strong>Meta Production Engineer interview questions</strong> asked. This unique role combines software and systems engineering, demanding versatility across infrastructure and troubleshooting challenges. Read on to optimize your prep.</p>

            <h2>Understanding the Production Engineer Role at Meta</h2>
            <p><strong>Production Engineers (PEs)</strong> at Meta are hybrid software and systems engineers. They work closely with various engineering teams to ensure the <strong>reliability, scalability, performance, and security</strong> of Meta's production services. This role bridges infrastructure and software. In a nutshell, PEs “keep the lights on”—heroes when things go wrong and unsung heroes when things go smoothly.</p>

            <h2>Overview of the Meta Production Engineer Interview Process</h2>
            <p>The <strong>Meta Production Engineer interview process</strong> typically spans <strong>3-4 hours</strong>.</p>
            <p>As a general rule, it's strongly recommended to <strong>spread out interviews across multiple days</strong> rather than doing them all in one day. The sustained mental load and stress response can impact performance after several rounds, and fatigue will creep in. You're more likely to be at your best during <strong>interview 1 on day 2</strong> than <strong>interview 3 on day 1</strong>.</p>
            
            <p>The process generally includes these stages:</p>

            <h3>Screening Stage</h3>
            <ul>
                <li><strong>Production Engineering Basics (45 mins):</strong> Covers foundational skills needed in production engineering, such as OS fundamentals, networking basics, and troubleshooting (e.g., explaining what happens from the moment a URL is entered in a browser until the page is rendered).</li>
                <li><strong>Production Engineering Coding (45 mins):</strong> Assesses technical problem-solving skills with practical coding tasks. Here’s an example:</li>
            </ul>
            
            <div class="coding-question">
                <h4>Coding Exercise Example:</h4>
                <p>You will be supplied with two data files in CSV format. The first file contains statistics about various dinosaurs. The second file contains additional data.</p>
                <p>Given the following formula:</p>
                <pre>speed = ((STRIDE_LENGTH / LEG_LENGTH) - 1) * SQRT(LEG_LENGTH * g)</pre>
                <p>Where <strong>g = 9.8 m/s²</strong> (gravitational constant).</p>
                <p>Write a program to read in the data files from disk, then print the names of only the bipedal dinosaurs from fastest to slowest.</p>
                <p>Example data:</p>
                <pre>
        $ cat dataset1.csv
        NAME,LEG_LENGTH,DIET
        Hadrosaurus,1.4,herbivore
        Struthiomimus,0.72,omnivore
        Velociraptor,1.8,carnivore
        Triceratops,0.47,herbivore
        Euoplocephalus,2.6,herbivore
        Stegosaurus,1.50,herbivore
        Tyrannosaurus Rex,6.5,carnivore

        $ cat dataset2.csv
        NAME,STRIDE_LENGTH,STANCE
        Euoplocephalus,1.97,quadrupedal
        Stegosaurus,1.70,quadrupedal
        Tyrannosaurus Rex,4.76,bipedal
        Hadrosaurus,1.3,bipedal
        Deinonychus,1.11,bipedal
        Struthiomimus,1.24,bipedal
        Velociraptor,2.62,bipedal
                </pre>
            </div>

            <h3>Final Stage</h3>
            <ul>
                <li><strong>Behavioral Interview (45 mins):</strong> Focuses on Meta’s core values. Be prepared to discuss conflict resolution, collaboration, and how you "move fast."</li>
                <li><strong>Systems Interview (45 mins):</strong> Tests OS fundamentals, troubleshooting, and real-world problem-solving. Expect questions on broader OS topics beyond Linux, resource management, and networking. You could be presented with an architecture diagram for a Meta-like service (e.g., Instagram, WhatsApp) and asked to troubleshoot issues, such as identifying why a service might be processing requests slowly.</li>
                <li><strong>SWE Coding (45 mins):</strong> Similar to SWE LeetCode-style coding rounds but with more leniency. Here’s what to expect:
                    <ul>
                        <li>Some candidates successfully completed rounds despite not deriving an optimal algorithm, but they were able to implement the algorithm correctly when given one.</li>
                        <li>Minor bugs or one missed edge case may not necessarily disqualify you.</li>
                    </ul>
                </li>
            </ul>

            <h2>More Info on Interview Rounds</h2>

            <h3>Networking and System Interactions</h3>
            <p>Questions may cover <strong>OSI layers, TCP/IP, DNS, and HTTP protocols</strong>. Here are some examples of questions you might encounter:</p>
            <ul>
                <li>Where is DNS information stored on the system?</li>
                <li>What's the difference between TCP and UDP?</li>
                <li>Describe in detail what happens when a URL like <code>https://facebook.com</code> is entered into a browser, covering DNS resolution, TCP handshakes, routing, backend server processing, and DOM changes in the browser.</li>
            </ul>
            <p>To test and improve your readiness for questions like these, consider attempting our diagnostic tests, which are based on real questions Meta Production Engineer candidates have encountered:</p>
            <ul>
                <li><a href="${DIAGNOSTIC_ASSESSMENT_URL_NETWORKS_1}" target="_blank" rel="noopener noreferrer">Networking Diagnostic Test 1</a></li>
                <li><a href="${DIAGNOSTIC_ASSESSMENT_URL_NETWORKS_2}" target="_blank" rel="noopener noreferrer">Networking Diagnostic Test 2</a></li>
            </ul>

            <h3>Systems Interview and OS Knowledge</h3>
            <p>Expect questions on areas like <strong>virtual memory, swapping, page faults, segmentation faults</strong>, as well as <strong>kernel processes, resource management, and the networking stack</strong>. Example questions include:</p>
            <ul>
                <li>What is a zombie process, and can it be terminated?</li>
                <li>What is the difference between a symlink and a hardlink?</li>
            </ul>
            <p>For hands-on practice and to benchmark your knowledge, try our diagnostic assessments based on past Meta interview questions:</p>
            <ul>
                <li><a href="${DIAGNOSTIC_ASSESSMENT_URL_OPERATING_SYSTEMS_1}" target="_blank" rel="noopener noreferrer">Operating Systems Diagnostic Test 1</a></li>
                <li><a href="${DIAGNOSTIC_ASSESSMENT_URL_OPERATING_SYSTEMS_2}" target="_blank" rel="noopener noreferrer">Operating Systems Diagnostic Test 2</a></li>
            </ul>

            <h3>Coding Exercises</h3>
            <ul>
                <li>Coding will be on CoderPad, so practice using their sandbox.</li>
                <li>You'll typically be able to code in your preferred language; just make sure you’re familiar with the built-in libraries and functions.</li>
                <li>Some questions may include helper functions to use when solving the problem. Avoid implementing something that already exists—pay attention to these details.</li>
            </ul>

            <h3>Behavioral Interview</h3>
            <p>Behavioral questions will revolve around Meta’s core values, such as <strong>“Move Fast,” “Focus on Long-Term Impact,”</strong> and <strong>“Be Direct.”</strong> Topics may include:</p>
            <ul>
                <li><strong>Adaptability and Learning:</strong> 
                    <ul>
                        <li>Share an experience where you had to learn a new technology or tool quickly. How did you manage it?</li>
                        <li>Describe a time when you had to adapt to significant changes at work.</li>
                    </ul>
                </li>
                <li><strong>Navigating Conflicts and Lessons Learned</strong></li>
                <li><strong>Teamwork and Collaboration</strong></li>
                <li><strong>Handling Failure and Resilience</strong></li>
                <li><strong>Motivation and Cultural Fit:</strong> 
                    <ul>
                        <li>Why do you want to work at Meta?</li>
                        <li>What excites you about the role and the company?</li>
                    </ul>
                </li>
            </ul>

            <h2>Team Matching</h2>
            <p>During team matching, you should expect a direct call with a hiring manager. Technical questions are usually not expected at this stage; typically, the manager is trying to assess mutual fit, and candidates can specify team preferences. Offers are sometimes made very quickly, within a matter of days.</p>

            <p>If you've recently gone through the <strong>Meta Production Engineer interview</strong> (new grads included), please share any additional tips or insights that could help others. Best of luck with your preparation!</p>
        </div>
        `
    }

};