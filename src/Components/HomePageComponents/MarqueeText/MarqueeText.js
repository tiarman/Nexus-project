/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './MarqueeText.css';

const MarqueeText = () => {
    return (
        <div class="breaking-news-section">
				<span id="btext">Breaking News</span>
				<marquee direction="left" onmouseover="this.stop()" onmouseout="this.start()">
					<a href="/" class="breaking-news">
						<p class="bntime">11 Jan 2019</p>
						আমাদের ওয়েবসাইটে আপনাকে স্বাগতম।</a>
					<a href="/" class="breaking-news"><p class="bntime">11 Jan 2019</p>Powerful laser beam is helping track the moon</a>
					<a href="/" class="breaking-news"><p class="bntime">11 Jan 2019</p>Snowstorm buries Pacific Northwest, with more on the way</a>
				</marquee>
			</div>
    );
};

export default MarqueeText;