import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  return (
    <TabsContent value="education" className="space-y-8">
      <AnimatedSection animation="fadeIn" delay={200}>
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <span className="tag mb-2">2021-2025</span>
                <h3 className="text-xl font-bold">B.Tech in CSE - AI & ML</h3>
                <p className="text-muted-foreground">Kakinada Institute of Engineering & Technology</p>
              </div>
              <span className="mt-2 md:mt-0 font-semibold text-primary">CGPA: 8.00</span>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </TabsContent>
  );
};

export default Education;
