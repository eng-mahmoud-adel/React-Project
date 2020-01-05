import React from 'react';
import {ProfileSection, ProfileShow, ProfileTitle, ProfileTitleSpan, ProfileList, ProfileItem, Span, SpanWeb, SkillsSection, SkillsTitle, SkillsTitleSpan, SkillsDesc, Bar, SpanTitle, SpanPerc, Parent, SpanParent, SpanParentOne, SpanParentTwo, SpanParentThree} from "./style.js";

const Profile = () => {
    return (
        <ProfileSection>
            <div className="container">
                <ProfileShow>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Mahmoud Adel
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            1/1/1111
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Egypt
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            mahmoud@mahmoud.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileShow>
                
                <SkillsSection>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    <Bar>
                        <SpanTitle>Bootstrap</SpanTitle>
                        <SpanPerc>100%</SpanPerc>
                        <Parent>
                            <SpanParentOne></SpanParentOne>
                        </Parent>
                    </Bar>

                    <Bar>
                        <SpanTitle>CSS3</SpanTitle>
                        <SpanPerc>90%</SpanPerc>
                        <Parent>
                            <SpanParentTwo></SpanParentTwo>
                        </Parent>
                    </Bar>

                    <Bar>
                        <SpanTitle>Photoshop</SpanTitle>
                        <SpanPerc>80%</SpanPerc>
                        <Parent>
                            <SpanParentThree></SpanParentThree>
                        </Parent>
                    </Bar>
                    
                </SkillsSection>
                
            </div>
        </ProfileSection>
    )
}

export default Profile;